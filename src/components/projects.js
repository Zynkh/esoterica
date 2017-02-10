import React from 'react';
import { Link } from 'react-router';
import cgi from '../images/icons/icon_3d.png';
import comic from '../images/icons/icon_dnd.png';
import sketchbook from '../images/icons/icon_sketchbook.png';
import remarks from '../images/icons/icon_remarks.png';
import arcanengine from '../images/icons/icon_arcanengine.png';
import staticity from '../images/icons/icon_staticity.png';
import jabberwock from '../images/icons/icon_jabberwock.png';
import powerup from '../images/icons/icon_powerup.png';
import spider from '../images/icons/icon_spider.png';

import '../scss/projects.scss';

const ProjectItem = React.createClass({

  render: function() {
    return (
      <Link to={this.props.path} activeClassName="active">
        <div className="project-container" id={this.props.css}>
          <h2 className="title">{this.props.title}</h2>
          <p className="description">{this.props.description}</p>
          <div className="hilight"></div>
          <div className="hex-zone">
            <div className="hexagon">
              <img src={this.props.icon} alt="project icon"/>
            </div>
          </div>
        </div>
      </Link>
    );
  }
});

const Projects = React.createClass({
  render: function() {
    return (
      <div className='project-zone'>

      <ProjectItem title="3D Art" css="doop" description="A modest showcase of my 3D art" icon={cgi} path="/cgi"/>
      <ProjectItem title="D&Derailed" description="A webcomic I produced" icon={comic} path="/cgi" path="/comic"/>
      <ProjectItem title="Sketchbook" description="I draw decent" icon={sketchbook} path="/sketchbook"/>
      <ProjectItem title="RE:Marks" description="Collaborative essay feedback app for classes" icon={remarks} path="/remarks"/>
      <ProjectItem title="ArcanEngine" description="A Kickstarter Campaign" icon={arcanengine} path="/arcanengine"/>
      <ProjectItem title="Staticity" description="App that compares cities on livability metrics" icon={staticity} path="/staticity"/>
      <ProjectItem title="The Jabberwock" description="A short film I produced" icon={jabberwock} path="/jabberwock"/>
      <ProjectItem title="Power UP!" description="A compilation album" icon={powerup} path="/powerup"/>
      <ProjectItem title="Craig-Spider-Ad-Builder-Tron" description="A time saver" icon={spider} path="/spider"/>

      </div>
    );
  }
});

export default Projects;