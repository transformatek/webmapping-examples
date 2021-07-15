import { MapContainer, TileLayer, LayersControl, Marker, Tooltip,Popup } from 'react-leaflet';
import pois from '../pois.js';
import toGeoJson from '../utils.js'
import React,{useState} from "react";

import SearchField from './Search.js'
import Details from './Details.js';
const Map = () => {

    const center = [35.0, -1.0];
    const [selectedFeature, setSelectedFeature] = useState({});
    const [open,setOpen] = useState(false);
    const points = toGeoJson(pois);


    return (

        <div className="leaflet-container">

            <MapContainer center={center}
                zoom={10}
            >
                <LayersControl position='bottomright'>
                    <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Carto Light">
                        <TileLayer
                            attribution='&copy; Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL. '
                            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>

                {pois.map((feature) => {
                    return (
                        <Marker
                            position={[
                                feature.lat,
                                feature.lon
                            ]}
                            eventHandlers={{
                                click: () => {
                                    setSelectedFeature(feature)
                                    setOpen(true);
                                    console.log(feature);
                                },
                            }}
                        >
                            <Popup>{feature.title}</Popup>
                        </Marker>
                    );
                })}
                
                { open &&
                <Details feature={selectedFeature}
                        setOpen={setOpen}
                />
            }       
                <SearchField />
            </MapContainer>
        </div>
    )
}

export default Map;
