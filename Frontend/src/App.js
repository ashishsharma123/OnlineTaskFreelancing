import React, { Component } from "react";
import Counter from "./components/Counter";
import Header from './components/header/header';
import Router from './config/router';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router />
      </div>
    );
  }
}

export default App;