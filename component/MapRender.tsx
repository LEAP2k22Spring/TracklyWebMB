import { MapContainer, Marker, TileLayer,  Popup } from "react-leaflet";
import L from 'leaflet'
const MapRender = () => {
  const markerIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
    iconSize: [35, 45],
    popupAnchor: [-10, -20],
  });
  return (
    <MapContainer
      center={{ lat: 47.91660524732946, lng: 106.96457125140142 }}
      zoom={15}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=BlX75aexttP0PZgDJuki"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      ></TileLayer>
      <Marker
        position={[47.91660524732946, 106.96457125140142]}
        icon={markerIcon}
      >
        <Popup>
          <b>Hey</b>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapRender;
