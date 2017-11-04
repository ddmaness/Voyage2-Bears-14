import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const renderLogin = () => (
  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink tag={Link} to="/login">Log In</NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to="/sign-up">Sign Up</NavLink>
    </NavItem>
  </Nav>
);

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false, //set if navbar is expanded or collapsed on small screens initially (collapsed if false)
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.renderGreeting = this.renderGreeting.bind(this);
    this.logOutClick = this.logOutClick.bind(this);
  }
  
  logOutClick(event) {
    event.preventDefault();
    const { logUserOutFunction } = this.props;
    logUserOutFunction();
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  renderGreeting(username) {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/profile">Edit Profile</NavLink>
        </NavItem>
        <NavItem>
          {username} | <a href="/logout" onClick={this.logOutClick}>Log Out</a>
        </NavItem>'
      </Nav>
    );
  }

  render() {
    const { isLoggedIn, username } = this.props.authentication;

    return (
      <header className="wrapper">
        <Navbar light expand="sm">
          <NavbarBrand tag={Link} to="/">ChinguHackathon</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/projects">Explore Projects</NavLink>
              </NavItem>
            </Nav>
            { isLoggedIn ? this.renderGreeting(username) : renderLogin() }
          </Collapse>
        </Navbar>
      </header>
    );
  }
}