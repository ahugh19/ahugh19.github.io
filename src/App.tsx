import React, { Component } from 'react';
import 'typeface-roboto';
import './App.scss';
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    )
  }
}

export default App;
