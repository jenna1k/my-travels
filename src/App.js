import React, { Component } from 'react';
import './App.css';

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Next Trips!</h1>
        <Travels/>
      </div>
    );
  }
}

export default App;


