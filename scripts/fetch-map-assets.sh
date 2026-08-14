#!/bin/sh
set -eu

ROOT=${1:-website}
MAPLIBRE_VERSION=${MAPLIBRE_VERSION:-5.24.0}
PMTILES_VERSION=${PMTILES_VERSION:-4.3.0}

mkdir -p "$ROOT/vendor/maplibre" "$ROOT/vendor/pmtiles"

curl -fL "https://unpkg.com/maplibre-gl@${MAPLIBRE_VERSION}/dist/maplibre-gl.js" \
  -o "$ROOT/vendor/maplibre/maplibre-gl.js"

curl -fL "https://unpkg.com/maplibre-gl@${MAPLIBRE_VERSION}/dist/maplibre-gl.css" \
  -o "$ROOT/vendor/maplibre/maplibre-gl.css"

curl -fL "https://unpkg.com/pmtiles@${PMTILES_VERSION}/dist/pmtiles.js" \
  -o "$ROOT/vendor/pmtiles/pmtiles.js"

printf 'Vendor assets downloaded. Review upstream licenses before redistribution.\n'
