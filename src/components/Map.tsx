import React from 'react';

const Map: React.FC = () => {

//   useEffect(() => {
    // const TILE_SIZE = 256;
    // let map: google.maps.Map | undefined;
    // const script = document.createElement('script');

    // const loadGoogleMaps = async () => {
    //   return new Promise((resolve, reject) => {
    //     script.onload = resolve;
    //     script.onerror = reject;
    //   });
    // };

    // Call the async function immediately using IIFE
    // (async () => {
    //   await loadGoogleMaps();
    //   // After the script has loaded, initialize the map
    // })();

    // const initMap = () => {
    //   const mapElement = document.getElementById("map");
    //   console.log('initMap called');

    //   if (!mapElement) {
    //     console.error("Element with ID 'map' not found");
    //     return;
    //   }

    //   const initialLatLng = new google.maps.LatLng(41.85, -87.65);

    //   map = new google.maps.Map(mapElement, {
    //     center: initialLatLng,
    //     zoom: 3,
    //   });

    //   map.addListener("click", (event) => {
    //     handleMapClick(event.latLng);
    //   });

    //   updateInfoWindow(initialLatLng, map.getZoom());
    // };

    // const handleMapClick = (latLng: google.maps.LatLng) => {
    //   if (map) {
    //     map.panTo(latLng);
    //     updateInfoWindow(latLng, map.getZoom());
    //   }
    // };

    // const updateInfoWindow = (latLng: google.maps.LatLng, zoom: number) => {
    //   const coordInfoWindow = new google.maps.InfoWindow();
    //   coordInfoWindow.setContent(createInfoWindowContent(latLng, zoom));
    //   coordInfoWindow.setPosition(latLng);
    //   coordInfoWindow.open(map);
    // };

    // const project = (latLng: google.maps.LatLng): google.maps.Point => {
    //   let siny = Math.sin((latLng.lat() * Math.PI) / 180);
    //   siny = Math.min(Math.max(siny, -0.9999), 0.9999);
    //   return new google.maps.Point(
    //     TILE_SIZE * (0.5 + latLng.lng() / 360),
    //     TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI)),
    //   );
    // };

    // const createInfoWindowContent = (
    //   latLng: google.maps.LatLng,
    //   zoom: number
    // ) => {
    //   if (!map) {
    //     return '';
    //   }

    //   const scale = 1 << zoom;
    //   const worldCoordinate = project(latLng);
    //   const pixelCoordinate = new google.maps.Point(
    //     Math.floor(worldCoordinate.x * scale),
    //     Math.floor(worldCoordinate.y * scale)
    //   );
    //   const tileCoordinate = new google.maps.Point(
    //     Math.floor((worldCoordinate.x * scale) / TILE_SIZE),
    //     Math.floor((worldCoordinate.y * scale) / TILE_SIZE)
    //   );

    //   console.log(latLng.lng());

    //   return [
    //     "Location",
    //     "LatLng: " + latLng,
    //     "Zoom level: " + zoom,
    //     "World Coordinate: " + worldCoordinate,
    //     "Pixel Coordinate: " + pixelCoordinate,
    //     "Tile Coordinate: " + tileCoordinate,
    //   ].join("<br>");
    // };

    // Initialize the map when the API script is loaded
    // window.initMap = initMap;

    // Load the Google Maps API script
    // script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly`;
    // script.defer = true;
    // script.async = true;
    // document.head.appendChild(script);

    // // Cleanup function
    // return () => {
    //   if (script.parentNode) {
    //     script.parentNode.removeChild(script);
    //   }
    // };
//   }, []);

  return (
    <div> 
      <iframe title="Map Itineraire Transport" width="100%" height="400" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12719.297751196034!2d47.5343259!3d-18.9013598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM3CsDM2JzIyLjMiTiAxMDDCsDIzJzU5LjQiVw!5e0!3m2!1sen!2sus!4v1628069225834!5m2!1sen!2sus" ></iframe> 
    </div>
  )
  // <div id="map" style={{ height: '100%' }}></div>;
};

export default Map;
