import React from 'react';
import { Row, Col, Button } from 'reactstrap';

import Background from '../profile-edit/form-components/Background';
import Skills from '../profile-edit/form-components/Skills';
import Languages from '../profile-edit/form-components/Languages';
import Timezone from '../profile-edit/form-components/Timezone';
import InlineEdit from '../profile-edit/InlineProfileEditContainer'

export default class ProfileInfo extends React.Component {
  render() {
    const { userAuth, userProfile } = this.props;

    return(
      <div>
        <Row className="profile-info-section mt-5 justify-content-center">
          <Button onClick={() => this.props.switchEdit(true)}>Edit Information</Button>
          <Row className="profile-info-header justify-content-center">
            <h3>
              General Info <small className="text-muted">Basic user details</small>
            </h3>
          </Row>
          <Col>
            {userAuth.firstName &&
              <p className="profile-info-item">{userAuth.firstName}</p>
            }
            {userAuth.lastName &&
              <p className="profile-info-item">{userAuth.lastName}</p>
            }
            {userAuth.username &&
              <p className="profile-info-item">{userAuth.username}</p>
            }
            {userAuth.email &&
              <p className="profile-info-item">{userAuth.email}</p>
            }
          </Col>
        </Row>
        <InlineEdit 
        userAuth={this.props.userAuth}
        userProfile={this.props.userProfile}
        heading = 'Background'
        description = 'A short description of your coding journey'
        targetInfo = 'background'
        Comp={Background}
        />
        <InlineEdit 
        userAuth={this.props.userAuth}
        userProfile={this.props.userProfile}
        heading = 'Skills'
        description = 'Describe your current skillset to a potential project team.'
        targetInfo = 'skills'
        Comp={Skills}
        />
        <InlineEdit 
        userAuth={this.props.userAuth}
        userProfile={this.props.userProfile}
        heading = 'Languages'
        description = 'Languages you are comfortable using for projects'
        targetInfo = 'languages'
        Comp={Languages}
        />
        <InlineEdit 
        userAuth={this.props.userAuth}
        userProfile={this.props.userProfile}
        heading = 'Timezone'
        description = 'Your current timezone setting'
        targetInfo = 'timezone'
        Comp={Timezone}
        />
      </div>
    );
  }
}