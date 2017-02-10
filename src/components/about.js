import React from 'react';
import '../scss/about.scss';
import zach from '../images/zach1.jpg';
import splat from '../images/skillsplat.png';

const About = React.createClass({
  render: function() {
    return (
      <div>
        <div className="about-section double hello">
          <div className="left">
            <img src={zach} alt="Zach" />
          </div>
          <div className="right">
            <h2>Hi there.</h2>

            <div className="contact">

              <a href="" target="blank" className="btn-social btn-outline">
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <p>Instagram</p>
              </a>

              <a href="" target="blank" className="btn-social btn-outline">
                <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                <p>Resume</p>
              </a>
              
              <a href="" target="blank" className="btn-social btn-outline">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <p>Email</p>
              </a>

            </div>

            <p className="about-blurb">
            There are two paths to extrordinary, says Dilbert creator Scott Adams.
            <br />
            <br />
            1. Become the best at one specific thing.
            <br />
            2. Become very good (top 25%) at two or more things. 
            <br />
            <br />
            I’ve opted for the latter.
            </p>
          </div>
        </div>

        <div className="about-section single inkblot">
          <h2>
            Heard of a T-shaped person? Well... 
            <br /> 
            <small>
              For my shape, find a wall you dislike and hit it with a bag of paint.
            </small>
          </h2>
          
          <img src={splat} alt="skillsplat" />

          <h2>
           Not specialized. 
            <br /> 
            <small>
              But I can relate to anyone.
            </small>
          </h2>
        </div>

        <div className="about-section skillz">
          <h3>
            Software
          </h3>

          <div className="hard">
           Photoshop | Illustrator | Premiere | Animate | Maya | 3DS Max | MS Office | MS Project | MS Visio | Google Docs | macOS | Windows | Android
          </div>

          <h3>
            Web Development
          </h3>

          <div className="hard">
           HTML5 | CSS3 | Javascript | React | Angular | Jquery | Jekyll | Jira | Git | Responsive Design | UI/UX
          </div>
          

          <h3>
            More
          </h3>

          <div className="skills">
            <ul>
              <li>Entrepreneurship</li>  
              <li>3D Printing</li> 
              <li>Game Design</li>
              <li>Animation</li>
              <li>Film Production</li>
              <li>Event Management</li>     
            </ul>
            <ul>
              <li>Project Management</li>
              <li>Communication</li> 
              <li>Public Speaking</li>
              <li>Optimal Cat Petting</li>
              <li>Acting</li>
              <li>Crowdfunding</li>                
            </ul>
            <ul>
              <li>Red Teaming & Troubleshooting</li>
              <li>Product Development</li> 
              <li>Marketing Strategy</li> 
              <li>Business Development</li>
              <li>Copywriting</li>
              <li>Client Management</li>
            </ul>
          </div>
        </div>

        <div className="about-section single timeline">
          <h3>Awards & Honours</h3>
          <ul>
            <li>Top Student (Computer Graphics)</li> 
            <li>Walnut Grove Secondary</li> 
          </ul>
          <ul>
            <li>Silver Medal (Pentathlon)</li>
            <li>BC Summer Games</li> 
          </ul>
          <ul>
            <li>Top Commercial Performer</li>
            <li>Faces West Talent Conference</li> 
          </ul>
          <ul>
            <li>Honours</li>
            <li>Walnut Grove Secondary</li> 
          </ul>
          <ul>
            <li>Difference Maker</li>
            <li>VFS</li> 
          </ul>
          <ul>
            <li>Outstanding Term Project</li>
            <li>VFS</li> 
          </ul>
          <ul>
            <li>Youtube Scholarship Recipient</li>
            <li>VFS</li> 
          </ul>
        </div>

      </div>
    );
  }
});

export default About;