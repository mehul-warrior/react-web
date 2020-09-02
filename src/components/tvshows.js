import React, { Component } from 'react';
// import logo from './bb.jpg';
import './home.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Starplus from "./starplus";
import Sonysub from "./sonysub";
import Sony from "./sony";
import Colors from "./colors";



class Tv extends Component {
  render() {
    return (
      <Router>
            <center>
            
           <Link to="/colors"><img src="colorstv.png" className="App-logo" alt="logo" /></Link>
           <Link to="/sony"><img src="sony.jpg" className="App-logo" alt="logo" /></Link>
           <Link to="/sonysub"><img src="sonysub.jpg" className="App-logo" alt="logo" /></Link>
           <Link to="/starplus"><img src="starplus.jpg" className="App-logo" alt="logo" /></Link>
          
           
      
          
          
          <Route path="/colors"  component={Colors} />
          <Route path="/sonysub"  component={Sonysub} />
          <Route path="/sony"  component={Sony} />
          <Route path="/starplus"  component={Starplus} />
          


      </center>
</Router>
    );
  }
}

export default Tv;
