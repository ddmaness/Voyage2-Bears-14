import React, { Component } from 'react';
import SearchProjects from './search-projects';

class Homepage extends Component {
  render() {
    return (
      <div> 
        <header>
            <h1>Chingu Hackathon</h1>
        </header>

        <section>
            <SearchProjects/>
        </section>

        <section id ='featured-projects'>
            <h3>Featured Projects</h3>
            {/* TODO component for displaying featured projects will go here. This will display info on some number of projects
                based on criteria that is as of yet undetermined*/}
        </section>
    </div>
    );
  }
}

export default Homepage;