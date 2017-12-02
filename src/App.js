import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Landing from './Landing'
import AboutUs from './AboutUs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Landing}></Route>
        <Route path="/aboutus" exact component={AboutUs}></Route>
      </div>
    );
  }
}
export default App;
