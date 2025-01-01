mapboxgl.accessToken = mapToken;
  
const map = new mapboxgl.Map({
    container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12',
        center: coordinates,
        zoom: 11
    });
    console.log(coordinates);

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker({color : "red"})
    .setLngLat(coordinates)
    .addTo(map);