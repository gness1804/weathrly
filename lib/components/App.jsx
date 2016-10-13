const React = require('react')
const ReactDOM = require('react-dom')
const GetWeather = require('./GetWeather.jsx')

class App extends React.Component {
  render() {
    return(
<GetWeather dayOne="Click to see your weather."/>
// <LikesCounter initialCount={0}/>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('application'));

module.exports = App;
