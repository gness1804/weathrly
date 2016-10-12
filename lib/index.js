require('./styles.scss');

function getWeather() {
  $.get("http://weatherly-api.herokuapp.com/api/weather", function( data ) {
    $(".weather-output p").text("It will be " + data[0].weatherType.type + " " + "on" + " " + data[0].date);
  });
}

getWeather();
