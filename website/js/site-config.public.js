window.ONION_SITE_CONFIG = {
    offices: [
        {
            container: "office-one-map",
            name: "Office One",
            center: [-74.0000, 40.0000],
            zoom: 13,
            minZoom: 11,
            maxZoom: 16,
            bounds: [[-74.08, 39.94], [-73.92, 40.06]],
            pmtiles: "/maps/office-one.pmtiles"
        },
        {
            container: "office-two-map",
            name: "Office Two",
            center: [-74.1000, 40.1000],
            zoom: 13,
            minZoom: 11,
            maxZoom: 16,
            bounds: [[-74.18, 40.04], [-74.02, 40.16]],
            pmtiles: "/maps/office-two.pmtiles"
        }
    ],
    glyphs: window.location.origin + "/fonts/{fontstack}/{range}.pbf",
    fontStack: "Open Sans Regular"
};
