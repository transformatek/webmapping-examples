/**
 * Base Layers 
 */

var layerOSM = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
});


/**
 * Vector Layers  
 */

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#000',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    layerWilaya.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachWilayaFeature(feature, layer) {

    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        // click: zoomToFeature
    });
}


var layerWilaya = L.geoJSON([wilaya], {

    style: function (feature) {
        return feature.properties && {
            fillColor: feature.properties.fill,
            fillOpacity: feature.properties.fillOpacity,
            color: '#666',
            weight: 1
        };
    },

    onEachFeature: onEachWilayaFeature,

});

/**
 * map initialisation
 */

var mapLayerGroup = L.layerGroup([layerWilaya]); //, layerVilles]);

var baseLayers = {
    "OpenStreetMap": layerOSM
};

var overlays = {
    "Wilaya": layerWilaya
};

var map = L.map('map', { layers: [layerWilaya] }).setView([28.0, 3.0], 5);
map.addLayer(layerOSM);

L.control.layers(baseLayers, overlays).addTo(map);

/**
 * info
 */

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {

    var msg = props ? "<table style='width:100%'>" +
        "<tr> <td> <b>Wilaya : </b></td> <td>" + props.nom + "</td></tr>" +
        "</table>" :
        'Hover over a wilaya';

    this._div.innerHTML = msg;
};

info.addTo(map);

/**
 * Legend Wilaya
 */

// var legendWilaya = L.control({ position: 'bottomleft' });

// legendWilaya.onAdd = function(map) {

//     var div = L.DomUtil.create('div', 'info legend'),
//         grades = [0, 10, 30, 50, 100, 300],
//         labels = [],
//         from, to;

//     labels.push('<strong> Cas confirmés </strong>');
//     for (var i = 0; i < grades.length; i++) {
//         from = grades[i];
//         to = grades[i + 1];

//         labels.push(
//             '<i style="background:' + getColor(from + 1) + '"></i> ' +
//             from + (to ? '&ndash;' + to : '+'));
//     }

//     div.innerHTML = labels.join('<br>');
//     return div;
// };

// legendWilaya.addTo(map);
