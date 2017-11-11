import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class AboutSection extends React.Component{
  
  render(){
    return (
      <div id = "about">
        <Jumbotron fluid>
          <Container fluid className = "text-center">
            <h3>Our Purpose</h3>
            <p className="lead">Our purpose is to help developers connect in order to complete remote, "hackathon" style, build-to-learn projects.</p>
            {!this.props.userAuth.isLoggedIn &&
              <div>
                <hr/>
                <p>Get started today by <Link to="/sign-up">signing up</Link> and looking for an interesting project to join, or starting one of your own.</p>
                <Button outline color="primary" tag={Link} to="/sign-up">Join</Button>
              </div>
            }
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default AboutSection;
