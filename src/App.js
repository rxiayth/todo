import React, { Component } from 'react';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppBody />
      </div>


    );
  }
}
export default App;
