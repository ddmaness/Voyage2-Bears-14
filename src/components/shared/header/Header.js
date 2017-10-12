import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false, //set if navbar is expanded or collapsed on small screens initially (collapsed if false)
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <header className="wrapper">
        <Navbar color="faded" light toggleable>
          <NavbarBrand tag={Link} to="/">ChinguHackathon</NavbarBrand>
          <NavbarToggler right onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/projects">Explore Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/sign-up">Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/account/login">Log In</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}