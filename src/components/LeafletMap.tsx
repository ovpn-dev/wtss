import { useEffect, useRef, useMemo } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LeafletMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  // Coordinates for 1 Ademola Osinowo Street, Ikosi-ketu, Lagos, Nigeria
  // Replace with exact coordinates
  const position = useMemo<[number, number]>(() => [6.6045, 3.3792], []);

  useEffect(() => {
    if (mapRef.current !== null) {
      // Fix for the missing icon issue
      delete (L.Icon.Default.prototype as { _getIconUrl?: () => void })
        ._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });
      // Create map
      const map = L.map(mapRef.current).setView(position, 15);
      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);
      // Add marker for location
      const marker = L.marker(position).addTo(map);
      marker.bindPopup("Wisdom Tech Safety Solutions").openPopup();
      // Clean up on unmount
      return () => {
        map.remove();
      };
    }
  }, [position]);

  return (
    <div
      ref={mapRef}
      style={{ height: "100%", width: "100%", zIndex: 1 }}
    ></div>
  );
};

export default LeafletMap;
