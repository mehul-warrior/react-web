import React from 'react';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './demo';
import Movies from './hollywood';
import './nav.css';
import Tvshows from "./tvshows";
import Webseries from "./webseries";
import Sports from "./sports";
import Kids from "./kids";
import API from "./api";
import Footer from "./Footer";
function Nav()
{
    return(
        <nav>
    <Router>
      <div>
          <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/hollywood">Movies</Link>
          </li> 
          <li>
            <Link to="/webseries">Web Series</Link>
          </li>
          <li>

            <Link to="/tvshows">TV Shows</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
          <li>
            <Link to="/kids">Kids</Link>
          </li>   
          <li>
            <Link to="/api">API</Link>
          </li>
        </ul>

        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hollywood" component={Movies} />
          <Route path="/webseries" component={Webseries} />
          <Route path="/tvshows" component={Tvshows} />
          <Route path="/sports" component={Sports} />
          <Route path="/kids" component={Kids} />
          <Route path="/api" component={API} />
        </Switch>
      <footer>
  <h4>Made By MehulSinh Vaghela</h4>
</footer>  
      </div>
    </Router>
    </nav>



    );
}

export default Nav;