import React from 'react';
import { Link } from 'react-router';

import spider1 from '../media/spider/ad_start.jpg';
import spider2 from '../media/spider/output.jpg';

const Spider = React.createClass({
  render: function() {
    return (
      <div className="showcase-container">

        <div className="row">
          <div className="col-single">
            <h1>
              Craig-Spider-Ad-Builder-Tron
              <br />
              <small>
                A time saver.
              </small>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-single">

            <p>I operate a part-time businesstaking doing online inventory maintenance for car dealers in the area. This little snippet of code makes the job even more part-time.
            </p>

            <p>I target the page of the car I want.</p>
            <img src={spider1} />

            <p>And it spits out a nicely formatted ad for craigslist.</p>

            <img src={spider2} />

            <p>Step 3) Profit!</p>

          </div>
        </div>


      </div>
    );
  }
});

export default Spider;