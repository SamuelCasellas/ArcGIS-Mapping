const API_KEY = "AAPK321d61bd8cb64adcaf742d6cdb358ccdCXO2JrGUFiZl0PQvgiRgB1wGhZCRKBqE5xirtn9bSIMdlfdsRnmH33XiIBVB2JfN";

// Rigby is the between Rexburg and Idaho so we will use that.
const RIGBY_LONGITUDE = -111.909829694;
const RIGBY_LATITUDE = 43.670997316;

require(["esri/config", "esri/Map", "esri/views/MapView"], function (esriConfig, Map, MapView) {
    esriConfig.apiKey = API_KEY;

    const map = new Map({
        basemap: "arcgis-topographic" // Basemap layer service
    });

    const view = new MapView({
        map: map,
        center: [RIGBY_LONGITUDE, RIGBY_LATITUDE], // Longitude, latitude
        zoom: 10.9, // Zoom level
        container: "viewDiv" // Div element
    });
    
});
