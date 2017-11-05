import React from 'react';
import classnames from 'classnames';
import { Container, Jumbotron, Nav, NavItem, NavLink, Row, TabPane, TabContent } from 'reactstrap';
import { Link } from 'react-router-dom';

import './ProfilePage.css';
import avatar from './profile-placeholder.png';

import ProfileEdit from './ProfileEditContainer';
import ProfileInfo from './ProfileInfo';

export default class ProfilePage extends React.Component {
  constructor(props){
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 'profile'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return(
      <Container>
        <Jumbotron>
          <Row className="justify-content-center">
            <h1>{this.props.user.firstName} {this.props.user.lastName}</h1>
          </Row>
          <Row className="justify-content-center">
            <img src={avatar} alt="Avatar placeholder" />
          </Row>
        </Jumbotron>
        <Nav tabs className="nav-justified">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'profile' })}
              onClick={() => { this.toggle('profile'); }}
              tag={Link}
              to={`/${this.props.user.username}/profile`}
            >
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'settings' })}
              onClick={() => { this.toggle('settings'); }}
              tag={Link}
              to={`/${this.props.user.username}/settings`}
            >
              Settings
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="profile">
            <ProfileInfo user={this.props.user} />
          </TabPane>
          <TabPane tabId="settings">
            <Row>

            </Row>
          </TabPane>
        </TabContent>
      </Container>
    )
  }
}