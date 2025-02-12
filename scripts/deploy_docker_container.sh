#!/bin/bash
set -euo pipefail

# Define environment variables
export DOCKER_COMPOSE_FILE="${DOCKER_COMPOSE_FILE:-docker-compose.staging.yml}"
export KEYCLOAK_CONTAINER_NAME="${KEYCLOAK_CONTAINER_NAME:-keycloak-server}"

# Log function
log() {
  echo "$(date '+%Y-%m-%d %H:%M:%S') - $1"
}

log "🚀 Starting Keycloak deployment with Docker Compose file: $DOCKER_COMPOSE_FILE"

# Find old containers by name
OLD_CONTAINERS=$(docker ps --all --quiet --filter "name=$KEYCLOAK_CONTAINER_NAME")

if [ -n "$OLD_CONTAINERS" ]; then
  log "⚠️ Stopping and removing old container(s): $KEYCLOAK_CONTAINER_NAME"

  # Stop and remove all matching containers to prevent conflicts
  for CONTAINER in $OLD_CONTAINERS; do
    docker stop "$CONTAINER" && docker rm "$CONTAINER"
  done

  log "✅ Removed old container(s): $KEYCLOAK_CONTAINER_NAME"
else
  log "✅ No existing container found for: $KEYCLOAK_CONTAINER_NAME"
fi

# Deploy new container
log "🔄 Building and starting new container..."

docker compose -f ./deployments/compose/"$DOCKER_COMPOSE_FILE" down
docker compose -f ./deployments/compose/"$DOCKER_COMPOSE_FILE" up -d --remove-orphans

log "🎉 Deployment successful: $KEYCLOAK_CONTAINER_NAME"
