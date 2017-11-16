import React, { Component } from 'react';

import './App.css';
import SunSystem from './components/SunSystem/SunSystem'


class App extends Component {
  
  render() {
    document.title = "BYP";
  return(
    <div>
    
    <SunSystem />
    </div>
  )
  }
}

export default App;
