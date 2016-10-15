const React = require('react');
const ReactDOM = require('react-dom');
//require any other jsx files needed

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      location: "Denver"
    };
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
      </div> //end of main div GetWeather
    );
  }
} //end of App

ReactDOM.render(<App title='Weathrly' />, document.querySelector('#application'));
// ReactDOM.render(<ReactBox title='React to This'/>, document.querySelector('.application'));
