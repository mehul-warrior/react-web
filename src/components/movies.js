import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './demo';
import Hollywood from './hollywood';
import {Button,Carousel} from 'react-bootstrap';

  function Movies()
  {

      return(
          
          <Router>
              
          <Link to="/hollywood"><Button variant="primary">HollyWood</Button>{' '}</Link>
        
              <switch>
          
              <Route path="/" exact component={Home}> 
              
              </Route>
              <Route path="/hollywood" exact component={Hollywood}>

              </Route>
              </switch>
              </Router>
      
      );
  }
  export default Movies;