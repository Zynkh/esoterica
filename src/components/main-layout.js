import React from 'react';
import { Link } from 'react-router';
import logo from '../images/esoterica_logo.png';
import '../scss/main-layout.scss';

const MainLayout = React.createClass({
  render: function() {
    return (
      
      <div className="App">

        <header className="hero-clip">
          <img src={logo} className="logo" alt="logo" />
          <h1>Wheels & Esoterica
            <br />
            <small>"More Interesting than boring."</small>
          </h1>
        </header>

        <div className="feature-container">
          <div className="feature-content">
            <div className="blurb-mask"></div>
            <p className="blurb-content">
              So today I saw a turtle. This is noteworthy because I 
              don't normally see turtles...
            </p>
            <div className="feature-tag"></div>
            <h2 className="feature-title">
                I saw a turtle today
            </h2>
          </div>
        </div>

        <div className="sub-head">

          <div className="feature-push">

          </div>

          <div className="nav-container">
            <Link to="/blog" activeClassName="active">Blog</Link>
            <Link to="/projects" activeClassName="active">Projects</Link>
            <Link to="/about" activeClassName="active">About</Link>
          </div>
          
        </div>

        <div className="content-container">
          {this.props.children}
        </div>

        <footer>M.Z.Hill 2017</footer>

      </div>

    );
  }
});

export default MainLayout;