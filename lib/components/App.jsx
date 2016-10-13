const React = require('react');
const ReactDOM = require('react-dom');
const GetWeather = require('./GetWeather.jsx');

class App extends React.Component {
  render() {
    return(
<GetWeather dayOne="Day One" dayTwo="Day Two"/>
// <LikesCounter initialCount={0}/>
    )
  }
} //end of App

ReactDOM.render(<App />, document.getElementById('application'));

module.exports = App;
