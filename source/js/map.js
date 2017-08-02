$(function () {

    var myLatLng = {lat: 56.838457, lng: 60.612259};
    var mapSelector = document.getElementById('map');
    var map = new google.maps.Map(mapSelector, {
        center: myLatLng,
        zoom: 12
    });

});