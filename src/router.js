import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/main-layout';
import ShowcaseLayout from './components/showcase-layout';

// Pages
import Blog from './components/blog';
import Projects from './components/projects';
import About from './components/about';

import Cgi from './components/cgi';
import Comic from './components/comic';
import Sketchbook from './components/sketchbook';
import ReMarks from './components/remarks';
import ArcanEngine from './components/arcanengine';
import Staticity from './components/staticity';
import Jabberwock from './components/jabberwock';
import PowerUp from './components/powerup';
import Spider from './components/spider';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      
      <Route path="/" component={Blog} />
      <Route path="blog" component={Blog} />
      <Route path="projects" component={Projects} />
      <Route path="about" component={About} />

    </Route>

    <Route component={ShowcaseLayout}>
      
      <Route path="/cgi" component={Cgi} />
      <Route path="/comic" component={Comic} />
      <Route path="/sketchbook" component={Sketchbook} />
      <Route path="/remarks" component={ReMarks} />
      <Route path="/arcanengine" component={ArcanEngine} />
      <Route path="/staticity" component={Staticity} />
      <Route path="/jabberwock" component={Jabberwock} />
      <Route path="/powerup" component={PowerUp} />
      <Route path="/spider" component={Spider} />

    </Route>

  </Router>
);