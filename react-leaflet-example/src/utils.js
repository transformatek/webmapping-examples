export default function toGeoJson(pois) {

    var geoJson = {
        "type": "FeatureCollection",
        "features": []
    };

    pois.forEach(element => {
        const {lat , lon ,...rest} = element ; 
        geoJson.features.push({
            "type": "Feature",
            "properties": rest,
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

