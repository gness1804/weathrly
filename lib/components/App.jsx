const React = require('react')
const ReactDOM = require('react-dom')

class App extends React.Component {
  constructor() {
    super();
    this.state = { location: ''};
  }

  render() {
    return(
      <div>
        HEY
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.querySelector('.application'));
