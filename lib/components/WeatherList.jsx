const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App.jsx');
const GetWeather = require('./GetWeather.jsx');
const WeatherButton = require('./WeatherButton.jsx');

class WeatherList extends React.Component {
  constructor(props) {
    super(props);
    let info = this.props.weekInfo;
    console.log(this.props.city);
  }

  render () {
    return (
      <div>
        <ul>
          <li>{}</li>
        </ul>
      </div>
    );
  }
} //end of WeatherList

module.exports = WeatherList;
