import React, { Component } from 'react';
import SearchProjects from '../SearchProjects/SearchProjects';

class HomePage extends Component {
  render() {
    return (
      <div>
        <header>
            <h1>Chingu Hackathon</h1>
        </header>

        <section>
            <SearchProjects history={this.props.history}/>
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

export default HomePage;
