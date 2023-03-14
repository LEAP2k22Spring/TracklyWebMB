import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import L from "leaflet";
import { useCollection } from "@/firebase/useFirebase";
const MapRender = () => {
  const { snapData: locationData } = useCollection("location", {
    field: "status",
    option: "==",
    value: "active",
  });
  const markerIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [35, 45],
    popupAnchor: [-10, -20],
  });
  console.log(locationData);
  return (
    
    <MapContainer
      center={{ lat: 47.917114631914956,  lng: 106.91966929047898 }}
      zoom={15}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=BlX75aexttP0PZgDJuki"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      ></TileLayer>
      {locationData?.map((el, index) => (
        <Marker
          position={[el.coords[0], el.coords[1]]}
          icon={markerIcon}
          key={index}
        >
          <Popup>
            <b>{el.firstname} {el.lastname}</b>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapRender;
