// // const haleemaSa = document.getElementById('')

// function initialize() {
//   var locations = [
//     ['Haleema Sameena', 59.22079022762899, 17.937983317114234, 4],
//     ['Mirinka Kotze', 59.36637129990946, 17.99704471833556, 5],
//     ['Mall Haas', 59.431285281804556, 24.769260091156706, 3],
//     ['Raluca Băceanu', 44.423334155322735, 26.012878918115014, 2],
//     ['Hassen Ahmed', 59.236069446273255, 17.839677400309043, 1],
//     ['Muzaffer Rende', 52.19343273416053, 20.899325058038187, 6],
//     ['Alex Ordynski', 49.23052066839969, 28.467679689472735, 7]
//   ];

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 3,
//     center: new google.maps.LatLng(59.23607899009092, 16.839677400309043),
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   });

//   var infowindow = new google.maps.InfoWindow();

//   var marker, i;

//   for (i = 0; i < locations.length; i++) {  
//     marker = new google.maps.Marker({
//       position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//       map: map
//     });

//      google.maps.event.addListener(marker, 'click', (function(marker, i) {
//       return function() {
//         infowindow.setContent(locations[i][0]);
//         infowindow.open(map, marker);
//       }
//     })(marker, i));
//   }
// }


// function myFunction( lat, long){
//     marker = new google.maps.Marker({
//     position: new google.maps.LatLng(lat, long),
//     map: map
//   });
//    google.maps.event.addListener(marker, 'click', (function(marker) {
//     return function() {
//       infowindow.setContent("hello");
//       infowindow.open(map, marker);
//     }
//   })(marker, i));

// }


// function loadScript() {
// var script = document.createElement('script');
// script.type = 'text/javascript';
// script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
//     'callback=initialize';
// document.body.appendChild(script);
// }

// window.onload = loadScript;

 //Google map Coordinates
	  var map
	  function initialize() //function initializes Google map
	  {
		var googleMapOptions =
		{
			center: mapCenter, // map center
			zoom: 15, //zoom level, 0 = earth view to higher value
			panControl: true, //enable pan Control
			zoomControl: true, //enable zoom control
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.SMALL //zoom control size
			 },
			scaleControl: true, // enable scale control
			mapTypeId: google.maps.MapTypeId.ROADMAP // google map type
        };
		map = new google.maps.Map(document.getElementById("google_map"), googleMapOptions);
      }

	  	function addMyMarker(lat, long) { 
      let mapCenter = new google.maps.LatLng(lat, long);//function that will add markers on button click
			var marker = new google.maps.Marker({
        
				position:mapCenter,
				map: map,
			 draggable:true,
				  animation: google.maps.Animation.DROP,
				title:"This a new marker!",
              icon: "http://maps.google.com/mapfiles/ms/micons/blue.png"
			});
		}

    function loadScript() {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
          'callback=initialize';
      document.body.appendChild(script);
    }

window.onload = loadScript;
