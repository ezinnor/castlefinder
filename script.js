function initMap() {
  var mehrangarh = {
    info:
      '<strong>Mehrangarh Fort</strong><br>\
        <img src="images/mehrangarh/mehrangarh.jpg" alt="tuglug fort" width="350" height="300"><br>\
    	<a href="pages/mehrangarh.html" text-align="center">More info and Pics</a>',
    lat: 26.297681,
    long: 73.018350,
  }

  var amer = {
    info:
      '<strong>Amer Fort</strong><br>\
    	<a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
    lat: 26.984940,
    long: 75.850854,
  }

  var chittor = {
    info:
      '<strong>Chittor Fort</strong><br>\
      <img src="images/chittor/chittor.jpg" alt="chittor fort" width="450" height="299"><br>\
    	<a href="pages/chittor.html" target="_blank" text-align="center">More Info and Pics</a>',
    lat: 24.886962,
    long: 74.644761,
  }
  var mehrangarh = {
    info:
      '<strong>Mehrangarh Fort</strong><br>\
        <img src="images/mehrangarh/mehrangarh.jpg" alt="tuglug fort" width="350" height="300"><br>\
    	<a href="pages/mehrangarh.html" text-align="center">More info and Pics</a>',
    lat: 26.297681,
    long: 73.018350,
  }










  // Put locations above this line.-----------------------------------------------------------------------
  var locations = [
    [mehrangarh.info, mehrangarh.lat, mehrangarh.long, 0],
    [amer.info, amer.lat, amer.long, 1],
    [chittor.info, chittor.lat, chittor.long, 2],
  ]

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: new google.maps.LatLng(25.168030, 75.851617),
  })

  var infowindow = new google.maps.InfoWindow({})

  var marker, i
  var clicked = false;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
    })

    google.maps.event.addListener(
      marker,
      'click',
      (function(marker, i) {
        
        return function() {
          clicked = true;
          infowindow.setContent(locations[i][0])
          infowindow.open(map, marker)
        }
      })(marker, i)
    )
    google.maps.event.addListener(
      marker,
      'mouseover',
      (function(marker, i){
        
        return function(){
          if(!clicked){
          infowindow.setContent(locations[i][0])
          infowindow.open(map, marker)
          }
        }
      
      })(marker, i)
    )
    google.maps.event.addListener(
      marker,
      'mouseout',
      (function(marker, i){
        
        return function(){
          if(!clicked){
          infowindow.close()
          }
        }
      
      })(marker, i)
    )
    google.maps.event.addListener(infowindow, 'closeclick', function(){
      clicked = false;
    })
  }
}
