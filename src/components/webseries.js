import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './home.css';
import {Button,Carousel} from 'react-bootstrap';

class Webseries extends Component {
  render() {
    return (
           
      <div class="container"> 
      <div class="clearfix" id="div">
             <Carousel>
               <Carousel.Item>
           <img src="got.png" className="App-logo2" alt="logo" />
           <p class="font">Game Of Thrones</p>
           <p class="font"> Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.
           <p class="font">
Creators: David Benioff, D.B. Weiss
Stars: Emilia Clarke, Peter Dinklage, Kit Harington | See full cast & crew »</p></p>
           </Carousel.Item>

           <Carousel.Item>
           <img src="vampire.jpg" className="App-logo2" alt="logo" />
           <p class="font">The Vampire Diaries</p>
           <p class="font">The lives, loves, dangers and disasters in the town, Mystic Falls, Virginia. Creatures of unspeakable horror lurk beneath this town as a teenage girl is suddenly torn between two vampire brothers.
           <p class="font">
Creators: Julie Plec, Kevin Williamson
Stars: Nina Dobrev, Paul Wesley, Ian Somerhalder | See full cast & crew »</p></p>
           </Carousel.Item>

           <Carousel.Item>
           <img src="narcos.jpg" className="App-logo2" alt="logo" />
           <p class="font">Narcos</p>
           <p class="font"> A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.
           <p class="font">
Creators: Carlo Bernard, Chris Brancato, Doug Miro | 1 more credit »
Stars: Pedro Pascal, Wagner Moura, Boyd Holbrook | See full cast & crew »</p></p>
           </Carousel.Item>

           <Carousel.Item>
           <img src="moneyhiest.jpg" className="App-logo2" alt="logo" />
           <p class="font">Money Heist</p>
           <p class="font">An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.
           <p class="font">
Creator: Álex Pina
Stars: Úrsula Corberó, Álvaro Morte, Itziar Ituño | See full cast & crew »</p></p>
           </Carousel.Item>
           </Carousel>
           </div>
      </div>

      

    );
  }
}

export default Webseries;
