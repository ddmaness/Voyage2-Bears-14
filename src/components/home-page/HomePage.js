import React from 'react';

import SplashSection from './splash-section/SplashSection';
import AboutSection from './about-section/AboutSectionContainer';

export default function HomePage(props) {
  const { decrementFunction, incrementFunction } = props;
  return (
    <div>
      <SplashSection/>
      <AboutSection/>
    </div>
  );
}
