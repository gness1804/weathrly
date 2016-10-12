const React = require('react');
const ReactDOM = require('react-dom');
const WeatherButton = require('./WeatherButton.jsx');

class GetWeather extends React.Component {
  constructor() {
    super();
    this.state = { location: ''};
  }

  function getWeather() {
    $.get("http://weatherly-api.herokuapp.com/api/weather", function( data ) {
      $(".weather-output p").text("It will be " + data[0].weatherType.type + " " + "on" + " " + data[0].date);
    });
  }

  this.setState = {location:}

  // getWeather();

  render() {
    return(
      <div className="GetWeather">
        <header>
          <h1>Welcome to Weathrly!</h1>
          <h3>Weathrly: Your World, Your Weather.</h3>
          <nav>
            <ul>
              <li class="nav-bar-item">Cities</li>
              <li class="nav-bar-item">Current Warnings</li>
              <li class="nav-bar-item">Driving Conditions</li>
              <li class="nav-bar-item">Cool Links</li>
            </ul>
          </nav>
        </header>
        <fieldset>
          <label for="current-location-input" class="fieldset-left-item">Your Current Location:
          <input id="current-location-input" type="text" placeholder="City" list="current-loc-list" value="Denver">
          </input>
          <datalist id="current-loc-list">
            <option value="San Diego"></option>
            <option value="Denver"></option>
            <option value="San Francisco"></option>
            <option value="Castle Rock"></option>
          </datalist>
          </label>
        </fieldset>
          <button id ="get-weather-button" type="button">Get Weather</button>
      </div>
    );
  }
}

module.exports = GetWeather;
