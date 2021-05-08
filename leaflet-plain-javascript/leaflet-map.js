/**
 * Convert POIs (Points of Interest) from plain JSON to GeoJSON
 */

function toGeoJson(pois) {
    var geoJson = {
        "type": "FeatureCollection",
        "features": []
    };

    pois.forEach(element => {
        geoJson.features.push({
            "type": "Feature",
            "properties": element,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    element.lon,
                    element.lat
                ]
            }
        });
    });

    return geoJson;
}

/**
 * Overlay (vector) Layers  
 */
 
// Display more details of the selected feature on a side panel

function displayMoreInfo(e) {
    featureProps = e.target.feature.properties;


    var html  = "";
    html  = '<strong>ID : </strong>' + featureProps.id + '<br/>';
    html += '<strong>City : </strong>' + featureProps.city + '<br/>';

    document.getElementById('more').innerHTML = html;
    console.log(e.target.feature.properties);
}

// specify popup options | popupCustom is defined in the HTML style section
var customPopupOptions =
{
    'maxWidth': '400',
    'width': '200',
    'className': 'popupCustom'
}

// Config event handlers for the Overlay Layer features

function onEachFeature(feature, layer) {
    //Replace POIs property with yours
    if (feature.properties && feature.properties.id) {
        let popupContent = 'ID : ' + feature.properties.id + "<br/>City: " + feature.properties.city;
        layer.bindPopup(popupContent, customPopupOptions);
    }
    
    // Add listner to diplay more informations in an external pane
    layer.on({
        click: displayMoreInfo
    });
}

// Create a new overlay layer as a geoJSON 

var layerPOIs = L.geoJSON([toGeoJson(pois)], {
    onEachFeature: onEachFeature
});

/**
 * Base Layers 
 */

// Create Base layer from OpenStreetMap tiles

var layerOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    tileSize: 512,
    zoomOffset: -1
});

// Create Base layer from OpenTopoMap tiles

var layerOpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

/**
 * Map initialisation and Add the layers to it
 */

var map = L.map('map', { layers: [layerPOIs] }).setView([28.0, 3.0], 5);
map.addLayer(layerOSM);

/**
 * Add Base and overlay layers to layers control panel (top-right)
 */
 
var baseLayers = {
    "OpenStreetMap": layerOSM,
    "OpenTopoMap": layerOpenTopoMap
};

var overlays = {
    "Points of Interest": layerPOIs
};

L.control.layers(baseLayers, overlays).addTo(map);

