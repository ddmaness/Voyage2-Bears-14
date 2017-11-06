import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class ProfileInfo extends React.Component {

  render() {
    const { userAuth, userProfile } = this.props;

    return(
      <div>
        <Row className="profile-info-section mt-5 justify-content-center">
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
        <Row className="profile-info-section">
          <Row className="profile-info-header justify-content-center">
            <h3>
              Background <small className="text-muted">A short description of your coding journey</small>
            </h3>
          </Row>
          <Col>
            {userProfile.background &&
              <p className="profile-info-item">{userProfile.background}</p>
            }
            {!userProfile.background &&
              <p className="profile-info-item"> Edit your profile to add this information.</p>
            }
          </Col>
        </Row>
        <Row className="profile-info-section">
          <Row className="profile-info-header justify-content-center">
            <h3>
              Skills <small className="text-muted">Describe your current skillset to a potential project team.</small>
            </h3>
          </Row>
          <Col>
            {userProfile.skills[0] &&
              <p className="profile-info-item">{userProfile.skills}</p>
            }
            {!userProfile.skills[0] &&
              <p className="profile-info-item"> Edit your profile to add this information.</p>
            }
          </Col>
        </Row>
        <Row className="profile-info-section">
          <Row className="profile-info-header justify-content-center">
            <h3>
              Languages <small className="text-muted">Languages you are comfortable using for projects</small>
            </h3>
          </Row>
          <Col>
            {userProfile.languages[0] &&
              <p className="profile-info-item">{userProfile.languages}</p>
            }
            {!userProfile.languages[0] &&
              <p className="profile-info-item"> Edit your profile to add this information</p>
            }
          </Col>
        </Row>
        <Row className="profile-info-section">
          <Row className="profile-info-header justify-content-center">
            <h3>
              Timezone <small className="text-muted">Your current timezone setting</small>
            </h3>
          </Row>
          <Col>
            {userProfile.timezone &&
              <p className="profile-info-item">{userProfile.timezone}</p>
            }
            {!userProfile.timezone &&
              <p className="profile-info-item"> Edit your profile to add this information.</p>
            }
          </Col>
        </Row>
      </div>
    );
  }
}