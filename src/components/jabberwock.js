import React from 'react';
import { Link } from 'react-router';

import jabberVid1 from '../media/jabberwock/jabberwock_teaser.mp4';
import jabberVid2 from '../media/jabberwock/jabberwock.ogv';
import jabberVid3 from '../media/jabberwock/jabberwock.webm';

import jabberImg1 from '../media/jabberwock/img_0844.jpg';
import jabberImg2 from '../media/jabberwock/jabberwocky20174.jpg';
import jabberImg3 from '../media/jabberwock/jabberwocky20073.jpg';
import jabberImg4 from '../media/jabberwock/jabberwocky20068.jpg';
import jabberImg5 from '../media/jabberwock/jabberwocky20214.jpg';


const Jabberwock = React.createClass({
  render: function() {
    return (
      <div className="showcase-container">

        <div className="row">
          <div className="col-single">
            <h1>
              Alice in Wasteland: The Jabberwock
              <br />
              <small>
                A post-apocalyptic riff on a whimsical classic.
              </small>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-single">

            <p>I served as a producer for this 50+ member, high production value short film. I seem to have misplaced the full film, but here's the teaser and some set shots.</p>

            <video controls>
              <source src={jabberVid1} type="video/mp4"/>
              <source src={jabberVid2} type="video/ogg"/>
              <source src={jabberVid3} type="video/webm"/>
            Your browser does not support the video tag.
            </video>

            <img src={jabberImg1} alt="Jabberwock Set"/>
            <img src={jabberImg2} alt="Jabberwock Set"/>
            <img src={jabberImg3} alt="Jabberwock Set"/>
            <img src={jabberImg4} alt="Jabberwock Set"/>
            <img src={jabberImg5} alt="Jabberwock Set"/>

          </div>
        </div>


      </div>
    );
  }
});

export default Jabberwock;