#!/bin/sh
# scripts/indexnow-submit.sh
#
# Sends the URL list prepared at build time (scripts/indexnow.mjs) to IndexNow.
# Runs inside the nginx container as Coolify's post-deployment command, i.e. after the
# new version is live, so search engines fetch the fresh pages and the key file.
# It never fails the deployment: every error is logged and the script exits 0.

PENDING=/etc/indexnow/pending.json
ENDPOINT=https://api.indexnow.org/indexnow

if [ ! -s "$PENDING" ]; then
  echo "[indexnow] no pending file, nothing to submit"
  exit 0
fi

if grep -q '"urlList":\[\]' "$PENDING"; then
  echo "[indexnow] no new or changed URLs in this deploy"
  exit 0
fi

COUNT=$(grep -o '"https://[^"]*"' "$PENDING" | grep -vc '\.txt"$')

# Give the proxy a moment to route traffic to the new container.
sleep 15

STATUS=$(curl -s -o /tmp/indexnow-response.txt -w '%{http_code}' \
  -X POST "$ENDPOINT" \
  -H 'Content-Type: application/json; charset=utf-8' \
  --data-binary "@$PENDING" \
  --max-time 30) || STATUS=000

case "$STATUS" in
  200|202) echo "[indexnow] submitted $COUNT URLs (HTTP $STATUS)" ;;
  *) echo "[indexnow] submission failed (HTTP $STATUS): $(head -c 300 /tmp/indexnow-response.txt 2>/dev/null)" ;;
esac
exit 0
