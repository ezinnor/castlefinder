function initMap() {
  var mehrangarh = {
    info:
      '<strong>Mehrangarh Fort</strong><br>\
        <img src="images/tuglag.jpg" alt="tuglug fort"><br>\
    	<a href="https://goo.gl/maps/jKNEDz4SyyH2" text-align="center">More info</a>',
    lat: 41.976816,
    long: -87.659916,
  }

  var amer = {
    info:
      '<strong>Amer Fort</strong><br>\
    	<a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
    lat: 41.93967,
    long: -87.655167,
  }

  var chittor = {
    info:
      '<strong>Chittor Fort</strong><br>\
      <img src="images/chittor.jpg" alt="chittor fort" width="450" height="299"><br>\
    	<a href="https://goo.gl/maps/QGUrqZPsYp92" text-align="center">Info</a>',
    lat: 42.002707,
    long: -87.661236,
  }

  var locations = [
    [mehrangarh.info, mehrangarh.lat, mehrangarh.long, 0],
    [amer.info, amer.lat, amer.long, 1],
    [chittor.info, chittor.lat, chittor.long, 2],
  ]

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: new google.maps.LatLng(41.976816, -87.659916),
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
