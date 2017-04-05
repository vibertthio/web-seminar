import React, { Component } from 'react'; // eslint-disable-line
import logo from './logo.svg';
import './App.css';

/**
 * TodoApp
 */
class TodoApp extends Component {

  /**
   * [constructor description]
   */
  constructor() {
    super();
    this.state = {
      nOfLists: 0,
    };
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Vibert Thio</h2>
        </div>
        <p className="App-intro">
          This is the TODD Lists made by Vibert Thio.
        </p>
      </div>
    );
  }
}

export default TodoApp;
