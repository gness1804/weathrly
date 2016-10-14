const React = require('react');
const ReactDOM = require('react-dom');
const GetWeather = require('./GetWeather.jsx');

class App extends React.Component {
  render() {
    return(
<GetWeather text="Click to see your weather." location="" extremeWeather=""/>

    )
  }
} //end of App

ReactDOM.render(<App />, document.getElementById('application'));

module.exports = App;
