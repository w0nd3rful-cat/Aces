// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 54.898521, lng: 	23.903597 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Initialize and add the map
function initMap2() {
  // Your location
  const loc = { lat: 27.261404, lng: 	33.814654 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}