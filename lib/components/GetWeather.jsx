const React = require('react');
const ReactDOM = require('react-dom');
const WeatherButton = require('./WeatherButton.jsx');

class GetWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      location: "Denver"};
  }

  handleInputChange(e){
      this.setState({location: e.target.value});
      console.log(this.state.location);
    } //end of handleInputChange

  showWeatherData(){
    let that = this;
    $.get("http://weatherly-api.herokuapp.com/api/weather", function (data) {
          addWeatherToApp(data);
        });
        function addWeatherToApp(data) {
          that.setState({weather: data});
        }
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
        </div> //end of GetWeather div
    );
  }
} //end of GetWeather function

module.exports = GetWeather;

// class GetWeather extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       weather: []
//       // text: props.text,
//       // location: props.location,
//       // extremeWeather: props.extremeWeather,
//       //data: ""; pass items from data into a new dynamic HTML
//     };
//   }
//
//
//   // componentDidMount() {
//   //   const mostRecentLocation = JSON.parse(localStorage.getItem("location"));
//   //   this.setState({location: mostRecentLocation ? mostRecentLocation : "Denver"});
//   // }
//
//   showWeatherData() {
//     let that = this;
//     $.get("http://weatherly-api.herokuapp.com/api/weather", function (data) {
//       addWeatherToApp(data);
//     });
//     function addWeatherToApp(data) {
//       that.setState({weather: data});
//     }
//   //   let city = this.state.location.toUpperCase();
//   //   let min;
//   //   let max;
//   //
//   //   this.setLocalStorage(this.state.location);
//   //
//   //   if (city === "DENVER") {
//   //     min = 0;
//   //     max = 8;
//   //   }
//   //   else if (city === "SAN DIEGO") {
//   //     min = 8;
//   //     max = 17;
//   //   }
//   //   else if (city === "SAN FRANCISCO") {
//   //     min = 17;
//   //     max = 26;
//   //   }
//   //   else if (city === "CASTLE ROCK") {
//   //     min = 26;
//   //     max = 35;
//   //   }
//   //   else {
//   //     alert('Please choose either San Diego, San Francisco, Castle Rock, or Denver, and check your spelling.');
//   //     //do something else; maybe send them to an external weather site with the city name entered in or pulling in a real api like that of weather underground?
//   //   }
//   //
//   //   let that = this;
//   //
//   //   $.get("http://weatherly-api.herokuapp.com/api/weather", function (data) {
//   //     let text = "";
//   //     let warning = "";
//   //     for (var i = min; i < max; i++) {
//   //       let percentChance = Math.floor(data[i].weatherType.chance * 100);
//   //       let extremeCondition = data[i].weatherType.type;
//   //       text = text + "In " + data[i].location + "," + " the weather on" + " " + data[i].date + " will be" + " " + percentChance + " percent chance of " + data[i].weatherType.type + "." + " The high will be " + data[i].temp.high + " " + "and the low will be " + data[i].temp.low + "." + " ";
//   //       if (data[i].weatherType.scale === 3) {
//   //         warning = warning + "On" + data[i].date + "," + " there will be extreme " + condition(extremeCondition);
//   //       } //end of if statement
//   //
//   //     } //end of for loop
//   //
//   //     function condition(extremeCondition) {
//   //       return extremeCondition;
//   //     }
//   //
//   //     that.setState({text: text});
//   //     that.setState({extremeWeather: warning});
//   //     // console.log(this.state);
//   //
//   //   }); //end of get function
//   //
//   // } //end of showWeatherData
//   //
//   // handleInputChange(e){
//   //   this.setState({location: e.target.value});
//   // } //end of handleInputChange
//   //
//   // setLocalStorage() {
//   //   localStorage.setItem("location", JSON.stringify(this.state.location));
//   // }
//
//   render () {
//     return (
//       <div className="GetWeather">
//         <header>
//           <h1>Welcome to -Weathrly-</h1>
//           <h3>Your World, Your Weather.</h3>
//           <nav>
//             <ul>
//               <li className="nav-bar-item">Cities</li>
//               <li className="nav-bar-item">Current Warnings</li>
//               <li className="nav-bar-item">Driving Conditions</li>
//               <li className="nav-bar-item">Cool Links</li>
//             </ul>
//           </nav>
//         </header>
//         <fieldset>
//           <label htmlFor="current-location-input" className="fieldset-left-item">Your Current Location:
//           <input id="current-location-input" type="text" placeholder="City" list="current-loc-list" onChange={this.handleInputChange.bind(this)} value={this.state.location}>
//           </input>
//           <datalist id="current-loc-list">
//             <option value="San Diego"></option>
//             <option value="Denver"></option>
//             <option value="San Francisco"></option>
//             <option value="Castle Rock"></option>
//           </datalist>
//           </label>
//         </fieldset>
//            <WeatherButton id = 'get-weather-button' text="Get Weather" handleClick={this.showWeatherData.bind(this)} />
//           //  <div className="weather-text">{this.state.text}</div>
//           //  <div className="extreme-weather">{this.state.extremeWeather}</div>
//       </div>
//     );
//   }
// } //end of GetWeather
//
// module.exports = GetWeather;
