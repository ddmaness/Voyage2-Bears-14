import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './SplashSection.css';

const SplashSection = () => (
  <div>
    <Jumbotron fluid className="splash-container d-flex flex-column justify-content-center">
      <Container fluid className="splash-text text-center">
        <h1 className="display-3">Hack, Share, Learn</h1>
        <p className="lead">'The journey of a thousand miles starts with a single step.'</p>
      </Container>
    </Jumbotron>
  </div>
)

export default SplashSection;
