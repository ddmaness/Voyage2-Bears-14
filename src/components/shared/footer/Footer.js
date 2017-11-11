import React from 'react';
import { Container } from 'reactstrap';
import './Footer.css';

export default function() {
  return(
    <footer className = "copyright">
      <Container className = "text-center">
				<h6 className = "copyright-text">&copy; 2017, created by Bears-Team-14 as part of Chingu Voyage-2</h6>
			</Container>
    </footer>
  )
}