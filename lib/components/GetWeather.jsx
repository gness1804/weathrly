const React = require('react');
const ReactDOM = require('react-dom');
const WeatherButton = require('./WeatherButton.jsx');

class GetWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dayOne: props.dayOne, dayTwo: props.dayTwo};
  }

  showWeatherData(num) {
    let that = this;

    // this.setState({location: num});
    $.get("http://weatherly-api.herokuapp.com/api/weather", function (data) {
      let text = "";
      for (var i = 0; i < data.length; i++) {
        // that.setState({dayOne: "The weather on" + " " + data[i].date + " will be" + " " + data[i].weatherType.type});
        // that.setState({dayTwo: "The weather on" + " " + data[i].date + " will be" + " " + data[i].weatherType.type});
        text = text + data[i].date + "<br>";
      }
      that.setState({dayOne: text});
      // that.setState({location: "The weather on" + " " + data[0].date + " will be" + " " + data[0].weatherType.type});

    }); //end of get function


  } //end of showWeatherData



 //  function getWeather() {
 // //   $.get("http://weatherly-api.herokuapp.com/api/weather", function( data ) {
 // //     $(".weather-output p").text("It will be " + data[0].weatherType.type + " " + "on" + " " + data[0].date);
 // //   });
 // // }

 //  addToLikesCount (num) {
 // //     this.setState( {count: this.state.count + num } )
 // //   }

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
          <input id="current-location-input" type="text" placeholder="City" list="current-loc-list">
          </input>
          <datalist id="current-loc-list">
            <option value="San Diego"></option>
            <option value="Denver"></option>
            <option value="San Francisco"></option>
            <option value="Castle Rock"></option>
          </datalist>
          </label>
        </fieldset>
           <WeatherButton id = 'get-weather-button' text="Get Weather" handleClick={this.showWeatherData.bind(this, "Amy")} />
           <div>{this.state.dayOne}</div>
           <div>{this.state.dayTwo}</div>
      </div>
    );
  }
} //end of GetWeather

module.exports = GetWeather;



  // class LikesCounter extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {count: props.initialCount};
  //   }
  //
  //   addToLikesCount (num) {
  //     this.setState( {count: this.state.count + num } )
  //   }
  //
  //   render () {
  //     return (
  //       <div className="LikesCounter">
  //         <h3>Likes: {this.state.count}</h3>
  //         <div className="ActionButtons">
  //           <ActionButton id = 'like' text="Like! (+1)" handleClick={this.addToLikesCount.bind(this, 1)} /> //props
  //           <ActionButton id = 'dislike' text="Dislike! (-1)" handleClick={this.addToLikesCount.bind(this, -1)} /> //props
  //         </div>
  //       </div>
  //     )
  //   }
  // }
  //
  // module.exports = LikesCounter

  // getWeather (word) {
  //   this.setState({location: this.state.location + word});
  // }

  // function getWeather() {
  //   $.get("http://weatherly-api.herokuapp.com/api/weather", function( data ) {
  //     $(".weather-output p").text("It will be " + data[0].weatherType.type + " " + "on" + " " + data[0].date);
  //   });
  // }
  //
  // this.setState = {location:}

  // getWeather();

//   render() {
//     return(
//       <div className="GetWeather">
//         <header>
//           <h1>Welcome to Weathrly!</h1>
//           <h3>Weathrly: Your World, Your Weather.</h3>
//           <nav>
//             <ul>
//               <li class="nav-bar-item">Cities</li>
//               <li class="nav-bar-item">Current Warnings</li>
//               <li class="nav-bar-item">Driving Conditions</li>
//               <li class="nav-bar-item">Cool Links</li>
//             </ul>
//           </nav>
//         </header>
//         <fieldset>
//           <label for="current-location-input" class="fieldset-left-item">Your Current Location:
//           <input id="current-location-input" type="text" placeholder="City" list="current-loc-list" value="Denver">
//           </input>
//           <datalist id="current-loc-list">
//             <option value="San Diego"></option>
//             <option value="Denver"></option>
//             <option value="San Francisco"></option>
//             <option value="Castle Rock"></option>
//           </datalist>
//           </label>
//         </fieldset>
//            <WeatherButton id = 'get-weather-button' text="Submit" handleClick={this.getWeather("dogs")} />
//       </div>
//     );
//   }
// } //end of big function
//
// module.exports = GetWeather;
