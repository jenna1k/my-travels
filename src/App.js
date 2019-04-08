import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Travel 
          photo="https://www.ichep2018.org/images/sub_tourist01.jpg"
          destination="Seoul"
          country="South Korea"
          distance="8,122 km"
        />
      </div>
    );
  }
}

export default App;
