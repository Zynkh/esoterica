import React from 'react';
import { Link } from 'react-router';

import arcanLogo from '../media/arcanengine/ArcanEngine_Logo2.png';

const ArcanEngine = React.createClass({
  render: function() {
    return (
      <div className="showcase-container">

        <div className="row">
          <div className="col-single">
            <h1>
              ArcanEngine
              <br />
              <small>
                Crowdfunding. Tabletop Gaming. 3D Printing.
              </small>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-single">

            <p>This was my final project at VFS, which I worked on for awhile after, and eventually sold to a company working on a similar concept.</p>

<div className='embed-container'><iframe src="https://www.kickstarter.com/projects/330752914/arcanengine-build-and-3d-print-one-of-a-kind-table/widget/video.html" frameborder='0' allowfullscreen></iframe>
</div>

<img src={arcanLogo} alt="ArcanEngine Logo" />

          </div>
        </div>


      </div>
    );
  }
});

export default ArcanEngine;