var map;
var markersArray = [];
var mapCenter = new google.maps.LatLng(10.4167, 123.0000);

   var customIcons = {
  City: {
    icon: 'http://labs.google.com/ridefinder/images/mm_20_blue.png',
    shadow: 'http://labs.google.com/ridefinder/images/mm_20_shadow.png'
  },
  Municipality: {
    icon: 'http://labs.google.com/ridefinder/images/mm_20_red.png',
    shadow: 'http://labs.google.com/ridefinder/images/mm_20_shadow.png'
  }
};

    function load() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(10.4167, 123.0000),
    zoom: 8,
    mapTypeId: 'roadmap'

    });
    var infoWindow = new google.maps.InfoWindow;


    downloadUrl("xmlspitter.php", function(data) {
    var xml = data.responseXML;
    var markers = xml.documentElement.getElementsByTagName("marker");
    for (var i = 0; i < markers.length; i++) {
      var name = markers[i].getAttribute("name");
      var address = markers[i].getAttribute("address");
      var type = markers[i].getAttribute("type");
      var point = new google.maps.LatLng(
          parseFloat(markers[i].getAttribute("lat")),
          parseFloat(markers[i].getAttribute("lng")));
      var html = "<b>" + name + "</b> <br/>" + address;
      var icon = customIcons[type] || {};
      var marker = new google.maps.Marker({
        map: map,
        position: point,
        icon: icon.icon,
        shadow: icon.shadow
      });
      markersArray.push(marker);
      bindInfoWindow(marker, map, infoWindow, html);
    }
    });


    function bindInfoWindow(marker, map, infoWindow, html) {
    google.maps.event.addListener(marker, 'click', function() {
    infoWindow.setContent(html);
    infoWindow.open(map, marker);
    });
    }

    function addMyMarker() { //function that will add markers on button click
        marker = new google.maps.Marker({
            position:mapCenter, 
            map: map,
              draggable:true,
              animation: google.maps.Animation.DROP,
            title:"This a new marker!",
          icon: "http://maps.google.com/mapfiles/ms/micons/blue.png"
        });   
    }

    function downloadUrl(url, callback) {
    var request = window.ActiveXObject ?
    new ActiveXObject('Microsoft.XMLHTTP') :
    new XMLHttpRequest;

    request.onreadystatechange = function() {
    if (request.readyState == 4) {
    request.onreadystatechange = doNothing;
    callback(request, request.status);
    }
    };

    request.open('GET', url, true);
    request.send(null);
    }


    function doNothing() {}
  }