const React = require('react');
const ReactDOM = require('react-dom');
const WeatherButton = require('./WeatherButton.jsx');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      location: "Denver"
    };
  }

  //componentDidMount restoring JSON

  getWeatherData() {
    let that = this;
    let city = this.state.location.toUpperCase();
    if (city === "DENVER") {
      $.get("http://weatherly-api.herokuapp.com/api/weather/denver", function (data) {
        that.setState({weather:data});
      });
    }
    else if (city === "SAN DIEGO") {
      $.get("http://weatherly-api.herokuapp.com/api/weather/san-diego", function (data) {
        that.setState({weather:data});
      });
    }
    else if (city === "CASTLE ROCK") {
      $.get("http://weatherly-api.herokuapp.com/api/weather/castle-rock", function (data) {
        that.setState({weather:data});
      });
    }
    else if (city === "SAN FRANCISCO") {
      $.get("http://weatherly-api.herokuapp.com/api/weather/san-fransico", function (data) {
        that.setState({weather:data});
      });
    }

  } //end of getWeatherData

  handleInputChange(e) { //when they enter data into location field
    this.setState({location: e.target.value});
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
            <WeatherButton id = 'get-weather-button' text="Get Weather" handleClick={()=>this.getWeatherData()} />
            <WeatherList data={this.state.weather} city={this.state.location}/>

      </div> //end of GetWeather
    );
  }
} //end of App

class WeatherList extends React.Component {
  constructor(props) {
    super(props);
  }

  showWeatherData(data) {
    return(<div>
      On {data.date}, the weather in {data.location}
    </div>);
  }

  render () {
    return (
      <ul>
        <li>{this.props.data.map(this.showWeatherData)}</li>
      </ul>
    );
  }
} //end of WeatherList

ReactDOM.render(<App title='Weathrly' />, document.querySelector('#application'));
