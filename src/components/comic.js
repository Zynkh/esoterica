import React from 'react';
import { Link } from 'react-router';

import comicBanner from '../media/dderailed/dd_comic_banner.jpg';

import comicSample1 from '../media/dderailed/dd_1.jpg';
import comicSample2 from '../media/dderailed/dd_2.jpg';
import comicSample3 from '../media/dderailed/dd_3.jpg';
import comicSample4 from '../media/dderailed/dd_4.jpg';
import comicSample5 from '../media/dderailed/dd_5.jpg';
import comicSample6 from '../media/dderailed/dd_6.jpg';
import comicSample7 from '../media/dderailed/dd_7.jpg';
import comicSample8 from '../media/dderailed/dd_8.jpg';
import comicSample9 from '../media/dderailed/dd_9.jpg';
import comicSample10 from '../media/dderailed/dd_10.jpg';
import comicSample11 from '../media/dderailed/dd_11.JPG'; 
import comicSample12 from '../media/dderailed/dd_12.JPG';
import comicSample13 from '../media/dderailed/dd_13.jpg';
import comicSample14 from '../media/dderailed/dd_14.jpg';
import comicSample15 from '../media/dderailed/dd_15.jpg';
import comicSample16 from '../media/dderailed/dd_16.jpg';
import comicSample17 from '../media/dderailed/dd_17.jpg';
import comicSample18 from '../media/dderailed/dd_18.jpg';

import master from '../media/dderailed/dd_master.jpg';
import sketch from '../media/dderailed/step1_initial_sketches_sample.png';
import options from '../media/dderailed/step2_char_options_sample.jpg';
import final from '../media/dderailed/step3_final_char_sample.jpg';

const Comic = React.createClass({
  render: function() {
    return (
      <div className="showcase-container">

        <div className="row">
          <div className="col-single">
            <h1>
              D&Derailed
              <br />
              <small>
                A D&D Webcomic
              </small>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-single">

            <p>This webcomic was to be released as branded entertainment associated with my ArcanEngine Kickstarter. Based on the hijinks of my D&D group, I partnered with a great artist to develop the concept and we got through most of it before she moved back home, after which I put it on the backburner. I really enjoyed this one.
            </p>


            <img src={comicBanner} alt="comic-banner" />

            <h3>
              Development Sample - Step 1 - Initial Sketches 
              <br />
              <small>Getting the feel for the characters</small>
            </h3>
            <img src={sketch} alt="sketch"/>
            <h3>
              Development Sample - Step 2 - Character Options 
              <br />
              <small>Developing the details, features, clothing ect.</small>
            </h3>
            <img src={options} alt="options"/>
            <h3>
              Development Sample - Step 3 - Final Design
              <br />
              <small>Took what we liked best from concept and cleaned it up.</small>
            </h3>
            <img src={final} alt="final"/>

            <h3>Development Sample - Story Layout - Thumbnailing
              <br />
              <small>Initial rough layout, stick figures. If the flow works here, it's safe to say it'll work with actual artwork.</small>
            </h3>            
            <img src={master} alt="comic-sample" />

            <h3>Full scale sketches and finished pages.
              <br />
              <small>Initial rough layout, stick figures. If the flow works here, it's safe to say it'll work with actual artwork.</small>
            </h3>
            <img src={comicSample1} alt="comic-sample" />
            <img src={comicSample2} alt="comic-sample" />
            <img src={comicSample3} alt="comic-sample" />
            <img src={comicSample4} alt="comic-sample" />
            <img src={comicSample5} alt="comic-sample" />
            <img src={comicSample6} alt="comic-sample" />
            <img src={comicSample7} alt="comic-sample" />
            <img src={comicSample8} alt="comic-sample" />
            <img src={comicSample9} alt="comic-sample" />
            <img src={comicSample10} alt="comic-sample" />
            <img src={comicSample11} alt="comic-sample" /> 
            <img src={comicSample12} alt="comic-sample" />
            <img src={comicSample13} alt="comic-sample" />
            <img src={comicSample14} alt="comic-sample" />
            <img src={comicSample15} alt="comic-sample" />
            <img src={comicSample16} alt="comic-sample" />
            <img src={comicSample17} alt="comic-sample" />
            <img src={comicSample18} alt="comic-sample" />

          </div>
        </div>
      </div>
    );
  }
});

export default Comic;