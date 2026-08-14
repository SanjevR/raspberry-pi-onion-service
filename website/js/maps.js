(() => {
    "use strict";

    const config = window.ONION_SITE_CONFIG;
    if (!config || !Array.isArray(config.offices)) {
        console.error("Missing ONION_SITE_CONFIG.");
        return;
    }

    if (!window.maplibregl || !window.pmtiles) {
        for (const office of config.offices) {
            const element = document.getElementById(office.container);
            if (element) {
                element.innerHTML = "<p style='padding:1rem'>Local map libraries are not installed. See website/vendor/README.md.</p>";
            }
        }
        return;
    }

    const protocol = new pmtiles.Protocol();
    maplibregl.addProtocol("pmtiles", protocol.tile);

    function makeStyle(url) {
        return {
            version: 8,
            glyphs: config.glyphs,
            sources: {
                osm: {
                    type: "vector",
                    url: "pmtiles://" + url,
                    attribution: "© OpenStreetMap contributors"
                }
            },
            layers: [
                { id: "background", type: "background", paint: { "background-color": "#f3f1e8" } },
                { id: "landcover", type: "fill", source: "osm", "source-layer": "landcover", paint: { "fill-color": "#e4efd8", "fill-opacity": 0.55 } },
                { id: "landuse", type: "fill", source: "osm", "source-layer": "landuse", paint: { "fill-color": "#e8eadf", "fill-opacity": 0.45 } },
                { id: "parks", type: "fill", source: "osm", "source-layer": "park", paint: { "fill-color": "#cfe8c7", "fill-opacity": 0.8 } },
                { id: "water", type: "fill", source: "osm", "source-layer": "water", paint: { "fill-color": "#aad3df" } },
                { id: "waterways", type: "line", source: "osm", "source-layer": "waterway", paint: { "line-color": "#8bc1d1", "line-width": 1.5 } },
                { id: "buildings", type: "fill", source: "osm", "source-layer": "building", paint: { "fill-color": "#d8d2c8", "fill-outline-color": "#bbb4a8" } },
                { id: "roads-casing", type: "line", source: "osm", "source-layer": "transportation", paint: { "line-color": "#c7c3bc", "line-width": ["interpolate", ["linear"], ["zoom"], 11, 1, 14, 6] } },
                { id: "roads", type: "line", source: "osm", "source-layer": "transportation", paint: { "line-color": "#ffffff", "line-width": ["interpolate", ["linear"], ["zoom"], 11, 0.6, 14, 4] } },
                {
                    id: "road-labels",
                    type: "symbol",
                    source: "osm",
                    "source-layer": "transportation_name",
                    minzoom: 11,
                    layout: {
                        "symbol-placement": "line",
                        "text-field": ["coalesce", ["get", "name:latin"], ["get", "name"], ["get", "ref"]],
                        "text-font": [config.fontStack],
                        "text-size": ["interpolate", ["linear"], ["zoom"], 11, 10, 14, 14],
                        "text-padding": 2
                    },
                    paint: {
                        "text-color": "#444444",
                        "text-halo-color": "#ffffff",
                        "text-halo-width": 1.5
                    }
                },
                {
                    id: "place-labels",
                    type: "symbol",
                    source: "osm",
                    "source-layer": "place",
                    minzoom: 9,
                    layout: {
                        "text-field": ["coalesce", ["get", "name:latin"], ["get", "name"]],
                        "text-font": [config.fontStack],
                        "text-size": ["interpolate", ["linear"], ["zoom"], 9, 11, 14, 16]
                    },
                    paint: {
                        "text-color": "#333333",
                        "text-halo-color": "#ffffff",
                        "text-halo-width": 2
                    }
                }
            ]
        };
    }

    for (const office of config.offices) {
        const element = document.getElementById(office.container);
        if (!element) continue;

        const absoluteUrl = window.location.origin + office.pmtiles;
        protocol.add(new pmtiles.PMTiles(absoluteUrl));

        const map = new maplibregl.Map({
            container: office.container,
            style: makeStyle(absoluteUrl),
            center: office.center,
            zoom: office.zoom,
            minZoom: office.minZoom,
            maxZoom: office.maxZoom,
            maxBounds: office.bounds
        });

        map.addControl(new maplibregl.NavigationControl(), "top-right");
        new maplibregl.Marker({ color: "#c62828" })
            .setLngLat(office.center)
            .setPopup(new maplibregl.Popup({ offset: 25 }).setText(office.name))
            .addTo(map);
    }
})();
