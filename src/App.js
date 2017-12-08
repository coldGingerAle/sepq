import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Landing from './Landing'
import Team from './Team'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Landing}></Route>
        <Route path="/team" exact component={Team}></Route>
      </div>
    );
  }
}
export default App;


// WEBPACK FOOTER //
// ./src/App.js