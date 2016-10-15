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
      <div>Hi</div>
    );
  }
} //end of App

ReactDOM.render(<App title='Weathrly' />, document.querySelector('#application'));
// ReactDOM.render(<ReactBox title='React to This'/>, document.querySelector('.application'));
