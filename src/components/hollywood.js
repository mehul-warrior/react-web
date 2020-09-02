import React, { Component } from 'react';
import {Button,Carousel} from 'react-bootstrap';
import ReactDOM from 'react-dom';
// import logo from './bb.jpg';
import "./hollywood.css";
// import { Player , PosterImage} from 'video-react';
import ReactPlayer from 'react-player';


class Hollywood extends Component {



  render() {
   
      
      
    return (
      <div class="container"> 
        <div class="clearfix" id="div">
        
          
          <Carousel>
            <Carousel.Item>
           <img src="f9.jpg" className="img2" alt="logo" fluid /> 
           <p>Fast & Furious 9</p>
            <p class="font">Cypher enlists the help of Jakob, Dom's younger brother to take revenge on Dom and his team.<p class="font">
Director: Justin Lin
Writers: Daniel Casey (screenplay), Gary Scott Thompson (characters)
Stars: Charlize Theron, Vin Diesel, Helen Mirren | See full cast & crew »</p></p>
           </Carousel.Item>
           <Carousel.Item>
           <img src="bwidow.jpg" className="img2" alt="logo" /><br />
           <p>Marvel's Black Widow</p>
           <p class="font">A film about Natasha Romanoff in her quests between the films Civil War and Infinity War.<p class="font">
Director: Cate Shortland
Writers: Jac Schaeffer (story by), Ned Benson (story by) | 4 more credits »
Stars: Scarlett Johansson, Florence Pugh, Robert Downey Jr. | See full cast & crew »</p></p>
           </Carousel.Item>

           <Carousel.Item>
           <img src="underwater.jpg" className="img2" alt="logo" />
           <p>Marvel's Black Widow</p>
           <p class="font">
           A crew of oceanic researchers working for a deep sea drilling company try to get to safety after a mysterious earthquake devastates their deepwater research and drilling facility located at the bottom of the Mariana Trench.
           <p class="font">
Director: William Eubank
Writers: Brian Duffield (screenplay by), Adam Cozad (screenplay by) | 1 more credit »
Stars: Kristen Stewart, Vincent Cassel, Mamoudou Athie | See full cast & crew »</p>
           </p>
           </Carousel.Item>

           <Carousel.Item>
           <img src="bloodshot.jpg" className="img2" alt="logo" /><br />
           <p>Bloodshot</p>
                <p class="font">Ray Garrison, a slain soldier, is re-animated with superpowers.<p class="font">
Director: Dave Wilson (as David S.F. Wilson)
Writers: Jeff Wadlow (screenplay by), Eric Heisserer (screenplay by) | 1 more credit »
Stars: Vin Diesel, Eiza González, Sam Heughan | See full cast & crew »</p></p>
           </Carousel.Item>
          </Carousel> 

{/* <video
controls
      >
        <source src="f9.mp4" type="video/mp4" poster="f9.jpg" />
      </video>    */}
        
        
           <span className="fab fa-imdb fa-5x" />
           </div>
           
</div>
      

    );
  }
}

export default Hollywood;
