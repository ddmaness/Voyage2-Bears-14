import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createNewProject } from '../../../../actions/projects';

import ProfileCreateProject from './ProfileCreateProject';

export class ProfileCreateProjectContainer extends React.Component {
  render() {
      const { authentication, createNewProject, projects } = this.props;

    // Forward to a success page
    if (projects.createProjectSucceeded) {
      return (
        <Redirect to={`/${authentication.username}/projects`} />
      );
    }

    // User needs to be logged out to register
    if (!authentication.isLoggedIn) {
      return <p>Please log out before registering a new user</p>;
    }
    
    return (
      <div>
        <ProfileCreateProject authentication={authentication} createProject={createNewProject} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
    projects: state.projects,
  };
}
  
export default connect(mapStateToProps, { createNewProject })(ProfileCreateProjectContainer);