
# React-Leaflet webmapping example

This project illustrate how to use React with Leaflet through the library react-leaflet to create a Map with Points of interests and add search functionality to it.

We will be using the following tools : 

- Leaflet 
- React 
- React-Leaflet 
- Leaflet-Geosearch


## Installation

Create the project 

```
npx create-react-app react-leaflet
```

Install leaflet and react-leaflet

```
npm i -S leaflet react-leaflet
```

## Show a base map 
To start using leaflet we need to add Leaflet css and leaflet jss to to index.html

```html
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="" />

    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>
```



First let's create a component named Map , which will show the map and let user switch between base maps.

The MapContainer component is responsible for creating the Leaflet Map instance and

You can center a map on a specific point by passing it its coordinates.

The LayersControl let us switch between different layers,here we used basemaps from OSM and Carto. 

[Map.js](./src/components/Map.js)
```javascript

import { MapContainer, TileLayer, LayersControl} from 'react-leaflet';
const Map = () => {

    const center = [35.0, -1.0];
    
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
            </MapContainer>
        </div>
    )
}

export default Map;
```

[App.js](./src/App.js)

```javascript
import React from 'react' ; 
import './App.css';
import Map from './components/Map'

function App() {	
  return (
	<Map/>
  );
}
export default App;
```

For the map to be displayed make sure that MapContainer element has a defined height.


[App.css](./src/App.css)
```css
leaflet-container{
    width: 100vw;
    height: 100vh;
}        
```



## Add Points To The Map
Now let's populate our map with some data, we have a file pois.js which contains a list of arechological sites in Algeria 

```javascript
const pois = [
    ...
         {
            "title": "Mosquée Imam el-Houari (Minaret du campement)",
            "categories": "Monuments, Ottoman",
            "lat": 35.704654,
            "lon": -0.654517
        },
    ...
]
```

import the array in Map.js


[Map.js](./src/components/Map.js)

```javascript 
import pois from '../pois.js'
```
To show our points we are going to use the Marker component 
alongside with Popup component, so when the user click on the marker the popup opens and show the title of the site 



```javascript 
import {Marker,Popup} from 'react-leaflet' ;
```


```javascript

<MapContainer>

...

   {pois.map((feature) => {
                    return (
                        <Marker
                            position={[
                                feature.lat,
                                feature.lon
                            ]}
                        >
                            <Popup>{feature.title}</Popup>
                        </Marker>
                    );
                })}
...
</MapContainer>             

```

## Add Details Box
In this step we are going to add a box which will be displayed when a user clicks on marker, it will show details about the selected site.

To achieve that , we add and event handler to the Marker component that will handle the click event 


[Map.js](./src/components/Map.js)
```javascript
<Marker
    position={[
        feature.lat,
        feature.lon
    ]}
    eventHandlers={{
        click: () => {
            setSelectedFeature(feature)
            setOpen(true);
    },
    >
        <Popup>{feature.title}</Popup>
</Marker>
```

```javascript

import React,{useState} from "react";

const Map = () => {
 ...
 
    const [selectedFeature, setSelectedFeature] = useState({});
    const [open,setOpen] = useState(false);

 ...
}

```

We create another component Details.js 

```javascript 
import React from "react";
import "../App.css";

const Details = ({ setOpen, feature }) => {

    return (

        <div className='details-container'>
            <div className='details-close'
                onClick={() => setOpen(false)}
            >X</div>
            <div className='details-info'>
                <table>
                    <tbody>
                        {
                            Object.entries(feature).map(([key, val]) => {
                                return (
                                    <tr>
                                        <td>{key} </td>
                                        <td>{val}</td>
                                    </tr>
                                )
                            })}
                    </tbody>

                </table>
            </div>
        </div>
    )
}
export default Details;

```

Add the Detail component in [Map.js](./src/components/Map.js) below Marker

```javascript 
import Details from './Details.js';
```
```javascript 
<MapContainer>

    ...
    </Marker>
            {open &&    
                    <Details feature={selectedFeature}
                        setOpen={setOpen}
                    />
            }

    ...
</MapContainer>        
```

## Add Search Bar 

Now we are going to  add a simple search bar to search for places inside Algeria.

We use a library called leaflet-geosearch 

```
npm install leaflet-geosearch
```

Let's create a new component Search.js

The library comes with  multiple address providers, for exemple we are going to use the OpenStreetMapProvier 

[Search.js](./src/components/Search.js)
```javascript
import {GeoSearchControl, OpenStreetMapProvider} from 'leaflet-geosearch'; 
import {useMap} from 'react-leaflet';
import {useEffect} from 'react';
import L from "leaflet";
```

Don't forget to import the geosearch.css 

```javascript
import "leaflet-geosearch/dist/geosearch.css";
```

Initiate the provider , the countrycodes is specific parameter for openstreetmap it specifies the area of search 

[Search.js](./src/components/Search.js)

```javascript 
const provider = new OpenStreetMapProvider({
    params: {
        countrycodes: 'dz', 
      },
});
```

Create the search bar and create a custom marker for results

```javascript
const searchControl = new GeoSearchControl({
  provider: provider,
  style: 'bar',
  marker :{
      icon
  }
});
```
```javascript 
const icon = L.icon({
  iconSize: [48, 48],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-48.png",
});
```
Attach the GeoSearchControl to the map,the useMap hook provides the Leaflet Map instance in any descendant of a MapContainer
 


```javascript
const map = useMap();

useEffect(() => {
    map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, [])
return null;
}
```

Finally add the SearchField to the [Map.js](./src/components/Map.js) MapContainter
```
<MapContainer>
    ...
        <SearchField />
    ...
</MapContainer>    
```



## About TransformaTek

SARL TransformaTek is a company, based at Ain Temouchent in the north west of Algeria, working toward the large adoption of location intelligence technologies by small businesses. 

**Our mission** is to develop community driven platforms to democratize access to open geospatial datasets and build useful use cases for Business.

**Our values** : Openness, Use case driven, Community empowerement 

## Contact

You have a question or a comment, please contact us, or reach with us on social medias.
 - TranformaTek website : [transformatek.dz](https://transformatek.dz) 
 - Geoweba platform : [geoweba.transformatek.dz](https://geoweba.transformatek.dz)  

## Licensing

Those webmapping examples are licensed under an MIT/X style license with the following terms:

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

The full licensing terms are available in the [LICENSE](../LICENSE) file.