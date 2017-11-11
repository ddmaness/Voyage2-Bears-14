import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

import SplashSection from './splash-section/SplashSection';
import AboutSection from './about-section/AboutSectionContainer';
import NavFooter from '../shared/footer/NavFooterContainer'

export default function HomePage(props) {
  return (
    <div>
      <SplashSection/>
      <AboutSection/>
      <div id = "featured">
        <Jumbotron fluid>
          <Container fluid className = "text-center">
            <h3>Featured Projects</h3>
            <p className="lead">This will be our featured projects section</p>
          </Container>
        </Jumbotron>
      </div>
      <NavFooter/>
    </div>
  );
}
