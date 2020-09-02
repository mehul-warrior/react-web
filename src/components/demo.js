import React, { Component } from 'react';
import "./home.css";
import Movies from './movies';

class Home extends Component {

  render() {
    return (
      
        
      <div className="hero-container">
      <h1> Welcome To MySite</h1>
      
      <video className="video"
        autoPlay
        muted
        loop
        
      >
        <source src="vid2.mp4" type="video/mp4" />
      </video>
      
</div>


    );
  }
}

export default Home;
