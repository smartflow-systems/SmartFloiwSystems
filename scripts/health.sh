#!/usr/bin/env bash
set -euo pipefail

# SmartFlow Systems Health Check Script
# Tests the /health endpoint to verify service status

PORT=${PORT:-5000}
HEALTH_URL="http://localhost:${PORT}/health"

echo "🔍 SFS Health Check - Testing endpoint: ${HEALTH_URL}"

# Wait for server to be ready (if just started)
MAX_RETRIES=10
RETRY_COUNT=0

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
  if curl -sf "${HEALTH_URL}" > /dev/null 2>&1; then
    echo "✅ Server is responding"
    break
  fi
  RETRY_COUNT=$((RETRY_COUNT + 1))
  if [ $RETRY_COUNT -lt $MAX_RETRIES ]; then
    echo "⏳ Waiting for server... (attempt ${RETRY_COUNT}/${MAX_RETRIES})"
    sleep 2
  else
    echo "❌ Server failed to respond after ${MAX_RETRIES} attempts"
    exit 1
  fi
done

# Fetch health status
RESPONSE=$(curl -sf "${HEALTH_URL}" || echo '{"ok":false}')

echo "📡 Response: ${RESPONSE}"

# Check if response contains "ok":true
if echo "${RESPONSE}" | grep -q '"ok":true'; then
  echo "✅ Health check passed - Service is healthy"
  exit 0
else
  echo "❌ Health check failed - Service is unhealthy"
  exit 1
fi
