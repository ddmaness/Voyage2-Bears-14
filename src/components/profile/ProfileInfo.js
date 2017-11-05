import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class ProfileInfo extends React.Component {

  render() {
    const { user } = this.props;

    return(
      <div>
        <Row className="profile-info-section mt-5 justify-content-center">
          <Row className="profile-info-header justify-content-center">
            <h3>
              General Info <small className="text-muted">Basic user details</small>
            </h3>
          </Row>
          <Col>
            {user.firstName &&
              <p className="profile-info-item">{user.firstName}</p>
            }
            {user.lastName &&
              <p className="profile-info-item">{user.lastName}</p>
            }
            {user.username &&
              <p className="profile-info-item">{user.username}</p>
            }
            {user.email &&
              <p className="profile-info-item">{user.email}</p>
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
            {user.background &&
              <p className="profile-info-item">{user.background}</p>
            }
            {!user.background &&
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
            {user.skills[0] &&
              <p className="profile-info-item">{user.skills}</p>
            }
            {!user.skills[0] &&
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
            {user.languages[0] &&
              <p className="profile-info-item">{user.languages}</p>
            }
            {!user.languages[0] &&
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
            {user.timezone &&
              <p className="profile-info-item">{user.timezone}</p>
            }
            {!user.timezone &&
              <p className="profile-info-item"> Edit your profile to add this information.</p>
            }
          </Col>
        </Row>
      </div>
    );
  }
}