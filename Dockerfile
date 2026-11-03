# ==========================================
# Stage 1: Build the Astro static site
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies based on package-lock.json
COPY package.json package-lock.json ./
RUN npm ci

# Copy full source code
COPY . .

# Build production static bundle to /app/dist
RUN npm run build

# Prepare the IndexNow submission (new/changed URLs vs. the live manifest).
# Never fails the build: on any error an empty list is written instead.
RUN node scripts/indexnow.mjs || echo '{"urlList":[]}' > indexnow-pending.json

# ==========================================
# Stage 2: Serve with high-performance Nginx
# ==========================================
FROM nginx:alpine AS runner

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static site from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# IndexNow: pending URL list (kept outside the web root) + submit script,
# run by Coolify as the post-deployment command.
COPY --from=builder /app/indexnow-pending.json /etc/indexnow/pending.json
COPY scripts/indexnow-submit.sh /usr/local/bin/indexnow-submit.sh
RUN chmod +x /usr/local/bin/indexnow-submit.sh

# Expose HTTP port
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
