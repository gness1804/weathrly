require('./styles.scss');

function getWeather() {
  $.get("http://weatherly-api.herokuapp.com/api/weather", function( data ) {
    // console.log(data.current_observation.temp_f);
    // console.log(data[0].weatherType.type);
    $(".weather-output p").text("It will be " + data[0].weatherType.type + " tomorrow.");
  });
}

getWeather();
