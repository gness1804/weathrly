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

  showWeatherData() {
    alert('hi');
  }

  handleInputChange(e) {
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
            <WeatherButton id = 'get-weather-button' text="Get Weather" handleClick={this.showWeatherData} />
            <WeatherList weekInfo={this.state.weather} city={this.state.location}/>

      </div> //end of main div GetWeather
    );
  }
} //end of App

class WeatherList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <ul>
        <li>Hi</li>
      </ul>
    );
  }
} //end of WeatherList

ReactDOM.render(<App title='Weathrly' />, document.querySelector('#application'));
// ReactDOM.render(<ReactBox title='React to This'/>, document.querySelector('.application'));
