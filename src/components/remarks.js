import React from 'react';
import { Link } from 'react-router';

import remarks1 from '../media/remarks/write.jpg'
import remarks2 from '../media/remarks/comments.jpg'
import remarks3 from '../media/remarks/highlighting.jpg'

const ReMarks = React.createClass({
  render: function() {
    return (
      <div className="showcase-container">

        <div className="row">
          <div className="col-single">
            <h1>
              Re:Marks
              <br />
              <small>
                Collaborative essay feedback
              </small>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-single">

            <p>Our mid-course project at Lighthouse Labs, built in Sinatra. Users type up an essay in an online word processor and post them for feedback from their classmates and teachers.</p>

            <img src={remarks1} alt="ReMarks" />

            <p>Users provide targeted feedback on specific passages.</p>

            <img src={remarks2} alt="ReMarks" />

            <p>Users may highlight sections to comment on, duplicating the way a teacher would highlight when marking an essay.</p>

            <img src={remarks3} alt="ReMarks" />

          </div>
        </div>


      </div>
    );
  }
});

export default ReMarks;