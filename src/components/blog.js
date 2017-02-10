import React from 'react';
import '../scss/blog.scss';

const BlogItem = React.createClass({

  render: function() {
    return (
      <div className="post-box">
        <img src={this.props.src}/>
        <div className="post-mask"></div>
        <h2 className="post-title">{this.props.title}</h2>
        <p className="post-subhead">{this.props.description}</p>
        <div className="post-tag"></div>
      </div>
    );
  }
});

const Blog = React.createClass({
  render: function() {
    return (
      <div className="article-zone">
      
      <BlogItem 
      title="The Importance of Things" 
      description="I came to a realization. Things are important. Except when they aren't..."
      src="http://i.jootix.com/o/unnamed--c960665928.jpg"/>

      <BlogItem 
      title="Turnips" 
      description="Nope. Nope nope."
      src="http://i.jootix.com/o/unnamed--c960665928.jpg"/>

      <BlogItem 
      title="What's goin' on" 
      description="HEYYEYAAEYAAAEYAEYAA"
      src="http://i.jootix.com/o/unnamed--c960665928.jpg"/>

      <BlogItem 
      title="Pickles and Debacles" 
      description="When is a pickle not a pickle but a debacle..."
      src="http://i.jootix.com/o/unnamed--c960665928.jpg"/>

      <BlogItem 
      title="Ego is the Enemy" 
      description="Except when it isn't."
      src="http://i.jootix.com/o/unnamed--c960665928.jpg"/>


      </div>
    );
  }
});

export default Blog;