import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

// import './App.css';

// import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';

import Landing from './home/Landing';
import Movie from './home/Movie';

import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
