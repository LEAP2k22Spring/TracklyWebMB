import React, { useEffect } from "react";
import L, { icon } from "leaflet";
import { useMap } from "react-leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
export const RoutingMachine = () => {
  const map = useMap();
  let chooseIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [20, 25],
  });
  useEffect(() => {
    let marker1 = L.marker([47.91804573251184, 106.92599222374862], {
      icon: chooseIcon,
    }).addTo(map);
    map.on("click", (e) => {
      // L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      L.Routing.control({
        waypoints: [
          L.latLng(47.91804573251184, 106.92599222374862),
          L.latLng(e.latlng.lat, e.latlng.lng),
        ],
        lineOptions: {
          styles: [
            {
              color: "blue",
              opacity: 0.6,
              weight: 4,
            },
          ],
        },
        routeWhileDragging: false,
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: true,
      })
        .on("routesfound", (e:any) => {
          
          e.routes[0].coordinates.forEach((c: { lat: number; lng: number; }, i: number) => {
            
            setTimeout(() => {
              marker1.setLatLng([c.lat, c.lng]);
            }, 1000 * i);
          });
        })
        .addTo(map);
    });
  }, []);
  return null;
};
