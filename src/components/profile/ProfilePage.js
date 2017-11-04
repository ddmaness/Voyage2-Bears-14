import React from 'react';
import classnames from 'classnames';
import { Container, Jumbotron, Nav, NavItem, NavLink, Col, Row, TabPane, TabContent, Card, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './ProfilePage.css';
import avatar from './profile-placeholder.png';

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
        <Jumbotron className="d-flex justify-content-center align-content-center">
          <h1>{this.props.user.firstName} {this.props.user.lastName}</h1>
        </Jumbotron>

        <img src={avatar} alt="Avatar placeholder" />
        <Nav tabs>
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
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="settings">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    )
  }
}