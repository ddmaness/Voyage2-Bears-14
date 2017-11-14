import React from 'react';
import { Col, Row, Button } from 'reactstrap';

// import styles and assets
import './project-page.css';
import projectPic from './project-placeholder.jpg';

export default class ProjectPage extends React.Component{
  render() {
    const { 
      authentication,
      project,
      isEditingProject,
      switchEdit,
      userMemberProjects
    } = this.props;

    return(
      <Row className="justify-content-center">
        <Row className="py-3 col-10">
          <Col sm="3">
            <div>
              <img src={projectPic} alt="Placeholder" className="project-image" />
            </div>
          </Col>
          <Col sm="7" className="d-flex flex-column justify-content-center">
            <h1>{project.name}</h1>
            <p className="lead">Created By: {project.creatorName}</p>
          </Col>
          <Col sm="2" className="d-flex flex-column justify-content-center">
            {authentication.id === project.creator &&
              <Button>
                Edit
              </Button>
            }
            {userMemberProjects.indexOf(project._id) >= 0 &&
              <Button>
                Leave Team
              </Button>
            }
            {userMemberProjects.indexOf(project._id) < 0 &&
              authentication.isLoggedIn  &&
              authentication.id !== project.creator &&
              <Button>
                Join
              </Button>
            }
          </Col>
        </Row>
      </Row>
    );
  }
}
