import React, { Component } from 'react';
import SplashSection from './splash-section/SplashSection';

class HomePage extends Component {
  render() {
    return (
      <div>
        <SplashSection/>
        <section id ='featured-projects'>
            <h3>Featured Projects</h3>
            {/* TODO component for displaying featured projects will go here. This will display info on some number of projects
                based on criteria that is as of yet undetermined*/}
        </section>
    </div>
    );
  }
}

export default HomePage;
