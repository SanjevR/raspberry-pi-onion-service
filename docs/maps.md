# Self-Hosted Interactive Maps

The map design avoids third-party map requests from the visitor's browser.

## Components

- OpenStreetMap-derived vector data
- PMTiles archives
- MapLibre GL JS
- PMTiles JavaScript library
- local glyph/font PBF files

## Why PMTiles

PMTiles stores a tile pyramid in a single archive and supports HTTP range requests, allowing the browser to fetch only the portions needed for the current view.

## Production workflow

1. Export a small area around each office.
2. Generate a PMTiles archive compatible with the map style.
3. Verify layers with `ogrinfo`.
4. Place the archives under the website map directory.
5. Host MapLibre, PMTiles JavaScript, and glyphs locally.
6. Keep map coverage intentionally limited to the required local radius.
7. Preserve OpenStreetMap attribution.

Production map extracts are intentionally excluded from this public repository.
