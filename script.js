mapboxgl.accessToken = 'pk.eyJ1IjoibWlkb3VkZXYiLCJhIjoiY2toaHB0MGdjMDk4aDJ6dnM2Z25xajVidiJ9.Ev2aATfaBKvwVEFe036Bow';

 var map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-5.94226,32.30280],
    zoom: 3
});
 
map.addControl(
new mapboxgl.GeolocateControl({
        positionOptions: {
                            enableHighAccuracy: true
},
                            trackUserLocation: true
})
);

map.addControl(
        new MapboxDirections({
                                accessToken: mapboxgl.accessToken
                             }),
'top-left'


);
 
map.addControl(new mapboxgl.NavigationControl());

