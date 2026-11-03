#!/bin/sh
# scripts/indexnow-submit.sh
#
# Sends the URL list prepared at build time (scripts/indexnow.mjs) to IndexNow.
# Coolify runs it as the post-deployment command inside the new nginx container.
#
# Called without arguments it re-launches itself in the background and returns at once,
# so the deployment is never delayed; output goes to the container log (docker logs).
# The background run retries transient answers — including IndexNow's 403
# "SiteVerificationNotCompleted", which happens while a new key is being verified —
# and stops on success or on a definitive client error. It always exits 0.

PENDING=/etc/indexnow/pending.json
ENDPOINT=https://api.indexnow.org/indexnow
LOG=/proc/1/fd/1

if [ "$1" != "--run" ]; then
  if [ -w "$LOG" ]; then
    nohup sh "$0" --run >"$LOG" 2>&1 &
  else
    nohup sh "$0" --run >/tmp/indexnow.log 2>&1 &
  fi
  echo "[indexnow] submission scheduled in background (see container logs)"
  exit 0
fi

if [ ! -s "$PENDING" ]; then
  echo "[indexnow] no pending file, nothing to submit"
  exit 0
fi
if grep -q '"urlList":\[\]' "$PENDING"; then
  echo "[indexnow] no new or changed URLs in this deploy"
  exit 0
fi

COUNT=$(grep -o '"https://[^"]*"' "$PENDING" | grep -vc '\.txt"$')

# Delays (seconds) before each attempt: give the proxy time to route to the new
# container, then back off while a fresh key is being verified.
for DELAY in 15 60 180 600 1800; do
  sleep "$DELAY"
  STATUS=$(curl -s -o /tmp/indexnow-response.txt -w '%{http_code}' \
    -X POST "$ENDPOINT" \
    -H 'Content-Type: application/json; charset=utf-8' \
    --data-binary "@$PENDING" \
    --max-time 30) || STATUS=000
  BODY=$(head -c 300 /tmp/indexnow-response.txt 2>/dev/null)
  case "$STATUS" in
    200|202)
      echo "[indexnow] submitted $COUNT URLs (HTTP $STATUS)"
      exit 0 ;;
    400|422)
      echo "[indexnow] rejected (HTTP $STATUS), not retrying: $BODY"
      exit 0 ;;
    *)
      echo "[indexnow] attempt failed (HTTP $STATUS), will retry: $BODY" ;;
  esac
done

echo "[indexnow] giving up after retries"
exit 0
