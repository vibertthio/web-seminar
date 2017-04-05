import React, { Component } from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import add from './add';
import './index.css';

console.log(`5 + 2 = ${add(5, 2)}`);
console.log('config finished!');
console.log('watch mode on!');

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="jazz">Hello Wiorld</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
