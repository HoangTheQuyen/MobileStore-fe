import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './containers/Home/Home.js'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Route path='/' exact component={Home} />
      </Router>
      </div>
    );
  }
}

export default App;