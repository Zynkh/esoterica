import React from 'react';
import { Link } from 'react-router';

import pump1 from '../media/3danimation/pump.ogv';
import pump2 from '../media/3danimation/pump.mp4';
import pump3 from '../media/3danimation/pump.webm';

import rig1 from '../media/3danimation/zw_rig.ogv';
import rig2 from '../media/3danimation/zw_rig.webm';


const Cgi = React.createClass({
  render: function() {
    return (
      <div className="showcase-container">

        <div className="row">
          <div className="col-single">
            <h1>
              3D MODELLING
              <br />
              <small>
                A sample.
              </small>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-single">

            <video controls>
              <source src={pump1} type="video/ogg" />
              <source src={pump2} type="video/mp4" />
              <source src={pump3} type="video/webm" />
            Your browser does not support the video tag.
            </video>


            <p>I failed my first rigging class. I hated it, so I decided to create a script to do the work for me with a series of clicks. Of course, that required me learning the process inside and out, after which I found myself enjoying the process. There's a lesson there.</p>
            <video controls>
              <source src={rig1} type="video/ogg" />
              <source src={rig2} type="video/mp4" />
            Your browser does not support the video tag.
            </video>

          </div>
        </div>


      </div>
    );
  }
});

export default Cgi;