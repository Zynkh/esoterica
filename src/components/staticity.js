import React from 'react';
import { Link } from 'react-router';

import statImg1 from '../media/staticity/scores.jpg';
import statImg2 from '../media/staticity/cost.jpg';
import statImg3 from '../media/staticity/temperature.jpg';

import statImg4 from '../media/staticity/select.jpg'
import statImg5 from '../media/staticity/results.jpg'
import statImg6 from '../media/staticity/wordcloud.jpg'
import statImg7 from '../media/staticity/form.jpg'

const Staticity = React.createClass({
  render: function() {
    return (
      <div className="showcase-container">

        <div className="row">
          <div className="col-single">
            <h1>
              Staticity
              <br />
              <small>
                Beautiful, accessible city livability data
              </small>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-single">

            <p>Our second term project at lighthouse labs built in Ruby on Rails with the jquery and D3 js libraries. We wanted to practice wiring into different API's around the web and spitting out something unique.
            </p>

            <img src={statImg4} alt="staticity" />
            <img src={statImg5} alt="staticity" />
            <img src={statImg6} alt="staticity" />
            <img src={statImg7} alt="staticity" />

            <p>We also made it responsive to mobile.</p>

            <img src={statImg1} alt="staticity" />
            <img src={statImg2} alt="staticity" />
            <img src={statImg3} alt="staticity" />
          
          </div>
        </div>
      </div>
    );
  }
});

export default Staticity;