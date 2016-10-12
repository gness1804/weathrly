require('./styles.scss');

function getWeather() {
  $.get("http://weatherly-api.herokuapp.com/api/weather", function( data ) {
    // console.log(data.current_observation.temp_f);
    console.log(data[0].weatherType.type);
    // $(".weather-output").text(data[0].weatherType.type);
  });
}

getWeather();
