import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Footer.css'

const renderLogin = () => (
  <div>
    <NavItem>
      <NavLink tag={Link} to="/login">Log In</NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to="/sign-up">Sign Up</NavLink>
    </NavItem>
  </div>
);

export default class NavFooter extends React.Component {
  constructor(props) {
    super(props);

    this.logOutClick = this.logOutClick.bind(this);
  }
  
  logOutClick(event) {
    event.preventDefault();
    const { logUserOutFunction } = this.props;
    logUserOutFunction();
  }

  renderGreeting(username) {
    return (
			<div>
        <NavItem>
          <NavLink tag={Link} to={`/${username}/profile`}>Edit Profile</NavLink>
        </NavItem>
        <NavItem>
        <NavLink tag={Link} to="/logout" onClick={this.logOutClick}>Log Out</NavLink>
				</NavItem>
			</div>
    );
  }

  render() {
    const { isLoggedIn, username } = this.props.authentication;

    return (
      <div className = "verbose-footer">
        <footer className="container">
          <div className = "row">
            <div className = "col">
              <Navbar light expand="sm">
                <Nav className ="nav-link-footer" vertical>
                  <NavbarBrand tag={Link} to="/">ChinguHackathon</NavbarBrand>
                    <NavItem>
                      <NavLink tag={Link} to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/projects">Explore Projects</NavLink>
                    </NavItem>
                  { isLoggedIn ? this.renderGreeting(username) : renderLogin() }
                </Nav>
              </Navbar>
            </div>
            <div className = "footer-about col">
              <h5 className = "footer-about-heading">About This Project</h5>
              <p>This project was a collaborative effort from Bears Team 14, created as part of the Chingu Voyage-2.</p>
              <p><a href= "https://chingu-cohorts.github.io/chingu-directory/">Click here </a>
              to learn more about Chingu Cohorts and consider joining a supportive group of life-long learners.</p>
            </div>
          </div>
        </footer>
      </div>  
    );
  }
}