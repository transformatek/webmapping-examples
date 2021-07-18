import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import {useMap} from 'react-leaflet';
import   {useEffect} from 'react';
import "leaflet-geosearch/dist/geosearch.css";
import L from "leaflet";

const icon = L.icon({
  iconSize: [48, 48],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-48.png",
});

const SearchField = () => {

  const map = useMap();
  const provider = new OpenStreetMapProvider({
    params: {
        countrycodes: 'dz', 
      },
});

const searchControl = new GeoSearchControl({
  provider: provider,
  style: 'bar',
  marker :{
      icon
  },
  resultFormat: ({ result }) => result.label, 
  retainZoomLevel: false,
  showPopup: true,

});
  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [])

  return null;
}

export default SearchField; 