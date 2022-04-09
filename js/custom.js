navigator.geolocation.getCurrentPosition(function(pos){
    console.log(pos.coords.longitude);
    console.log(pos.coords.latitude);
    initMap(pos.coords.latitude,pos.coords.longitude)

})
    let map;

function initMap(lat,lng) {
  const mapOptions = {
    zoom: 8,
    center: { lat: lat, lng:  lng},
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const marker = new google.maps.Marker({
    position: { lat: lat, lng: lng},
    map: map,
  });
  const infowindow = new google.maps.InfoWindow({
    content: "<p>Marker Location:" + marker.getPosition() + "</p>",
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.open(map, marker);
  });
}
  