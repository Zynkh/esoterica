import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../scss/showcase-layout.scss';

const ShowcaseLayout = React.createClass({
  render: function() {
    return (
      
      <div className="App">

        <div className="content-container">
          {this.props.children}
        </div>

        <footer>M.Z.Hill 2017</footer>

      </div>

    );
  }
});

export default ShowcaseLayout;