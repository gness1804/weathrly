const React = require('react');
const ReactDOM = require('react-dom');
const WeatherButton = require('./WeatherButton.jsx');

class GetWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dayOne: props.dayOne};
  }

  showWeatherData(city) {
    let min;
    let max;
    if (city === "Denver") {
      min = 0;
      max = 8;
    }
    else if (city === "San Diego") {
      min = 8;
      max = 17;
    }
    else if (city === "San Francisco") {
      min = 17;
      max = 26;
    }
    else if (city === "Castle Rock") {
      min = 26;
      max = 35;
    }
    let that = this;

    $.get("http://weatherly-api.herokuapp.com/api/weather", function (data) {
      let text = "";
      for (var i = min; i < max; i++) {
        text = text + "In " + data[i].location + "," + " the weather on" + " " + data[i].date + " will be" + " " + data[i].weatherType.type;
      }
      that.setState({dayOne: text});

    }); //end of get function

  } //end of showWeatherData

  handleInputChange(){
    console.log("dogs");
  } //end of handleInputChange

  render () {
    return (
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
          <input id="current-location-input" type="text" placeholder="City" list="current-loc-list" onChange={this.handleInputChange}>
          </input>
          <datalist id="current-loc-list">
            <option value="San Diego"></option>
            <option value="Denver"></option>
            <option value="San Francisco"></option>
            <option value="Castle Rock"></option>
          </datalist>
          </label>
        </fieldset>
           <WeatherButton id = 'get-weather-button' text="Get Weather" handleClick={this.showWeatherData.bind(this, "Castle Rock")} />
           <div>{this.state.dayOne}</div>
      </div>
    );
  }
} //end of GetWeather

module.exports = GetWeather;
