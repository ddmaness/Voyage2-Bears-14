import React from 'react';
import { Row } from 'reactstrap';

export default class ProfileProjects extends React.Component {
  render() {
    const { title, projects } = this.props;

    return(
      <div>
        <Row className="profile-info-section mt-5 justify-content-center">
          <Row className="profile-info-header justify-content-center">
            <h3>
              {title}
            </h3>
            {projects.map((project, i) => {
              return(
                <p key={i}>
                  {project.name}
                </p>
              )
            })}
          </Row>
        </Row>
      </div>
    );
  }
}

//TODO - ADD INTEGRATION TO CALL PROJECT EDIT (CREATOR) IN PARENT CONTAINER OR LEAVE PROJECT (MEMBER)