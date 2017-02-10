import React from 'react';
import { Link } from 'react-router';

import albumVid1 from '../media/powerup/powerup_s.ogv';
import albumVid2 from '../media/powerup/powerup_s.mp4';
import albumVid3 from '../media/powerup/powerup_s.webm';

import frontCover from '../media/powerup/PowerUp_FrontCover_Web.jpg';
import backCover from '../media/powerup/PowerUp_BackCover_Web.jpg';
import disc from '../media/powerup/PowerUp_Disc_Web.png';

const PowerUp = React.createClass({
  render: function() {
    return (
      <div className="showcase-container">

        <div className="row">
          <div className="col-single">
            <h1>
              Power Up!
              <br />
              <small>
                An award winning, game themed charity album
              </small>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-single">

            <p>My second term project at VFS. We chose a charity, sourced the music, negotiated liscences and directed illustrators to produce the album art. The album broke $15,000 in sales, which 5X'd the previous record.</p>

            <video controls>
              <source src={albumVid1} type="video/ogg"/>
              <source src={albumVid2} type="video/mp4"/>
              <source src={albumVid3} type="video/webm"/>
            Your browser does not support the video tag.
            </video>
            <img src={frontCover} />
            <img src={backCover} />
            <img src={disc} />

          </div>
        </div>


      </div>
    );
  }
});

export default PowerUp;