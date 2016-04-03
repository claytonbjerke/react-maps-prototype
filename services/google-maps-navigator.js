export default {

  myPosition() {
    if (navigator.geolocation) {

      var prom = new Promise();

      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        return pos;

      }, function(err) {
        console.log('ERRROOORR!!', err);
      });
    }
  }

};
