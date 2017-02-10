import React from 'react';
import { Link } from 'react-router';

import sketch1 from '../media/sketchbook/1LD.jpg';
import sketch2 from '../media/sketchbook/2LD.jpg';
import sketch3 from '../media/sketchbook/3LD.jpg';
 
import sketch4 from '../media/sketchbook/7LD.jpg';
import sketch5 from '../media/sketchbook/8LD.jpg';
 
import sketch6 from '../media/sketchbook/9LD.jpg';
import sketch7 from '../media/sketchbook/13LD.jpg';
 
import sketch8 from '../media/sketchbook/black.jpg';
import sketch9 from '../media/sketchbook/white.jpg';
import sketch10 from '../media/sketchbook/blue.jpg';
import sketch11 from '../media/sketchbook/green.jpg';

const SketchBook = React.createClass({
  render: function() {
    return (
      <div className="showcase-container">

        <div className="row">
          <div className="col-single">
            <h1>
              Sketchbook
              <br />
              <small>
                Good enough to be useful.
              </small>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-single">

          <p>I describe my artistic ability as better than most, worse than "real" artists. The skill comes in handy pretty often though.</p>

          <img src={sketch1} alt="sketchbook" />
          <img src={sketch2} alt="sketchbook" />
          <img src={sketch3} alt="sketchbook" />
          <img src={sketch4} alt="sketchbook" />
          <img src={sketch5} alt="sketchbook" />
          <img src={sketch6} alt="sketchbook" />
          <img src={sketch7} alt="sketchbook" />

          <img src={sketch8} alt="sketchbook" />
          <img src={sketch9} alt="sketchbook" />
          <img src={sketch10} alt="sketchbook" />
          <img src={sketch11} alt="sketchbook" />


          </div>
        </div>


      </div>
    );
  }
});

export default SketchBook;