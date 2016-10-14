const React = require('react');
const ReactDOM = require('react-dom');
const WeatherButton = require('./WeatherButton.jsx');

class GetWeather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      location: props.location};
  }

  componentDidMount() {
    const mostRecentLocation = JSON.parse(localStorage.getItem("location"));
    this.setState({location: mostRecentLocation ? mostRecentLocation : "Denver"});
  }

  showWeatherData() {
    let city = this.state.location;
    let min;
    let max;

    this.setLocalStorage(this.state.location);

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
      that.setState({text: text});

    }); //end of get function

  } //end of showWeatherData

  handleInputChange(e){
    this.setState({location: e.target.value});
  } //end of handleInputChange

  setLocalStorage() {
    localStorage.setItem("location", JSON.stringify(this.state.location));
  }

  render () {
    return (
      <div className="GetWeather">
        <header>
          <h1>Welcome to -Weathrly-</h1>
          <h3>Your World, Your Weather.</h3>
          <nav>
            <ul>
              <li className="nav-bar-item">Cities</li>
              <li className="nav-bar-item">Current Warnings</li>
              <li className="nav-bar-item">Driving Conditions</li>
              <li className="nav-bar-item">Cool Links</li>
            </ul>
          </nav>
        </header>
        <fieldset>
          <label htmlFor="current-location-input" className="fieldset-left-item">Your Current Location:
          <input id="current-location-input" type="text" placeholder="City" list="current-loc-list" onChange={this.handleInputChange.bind(this)} value={this.state.location}>
          </input>
          <datalist id="current-loc-list">
            <option value="San Diego"></option>
            <option value="Denver"></option>
            <option value="San Francisco"></option>
            <option value="Castle Rock"></option>
          </datalist>
          </label>
        </fieldset>
           <WeatherButton id = 'get-weather-button' text="Get Weather" handleClick={this.showWeatherData.bind(this)} />
           <div>{this.state.text}</div>
      </div>
    );
  }
} //end of GetWeather

module.exports = GetWeather;
