import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ProfileProjects from './ProfileProjects';
import { getProfileProjects } from '../../../actions/project';

export class ProfileProjectsContainer extends React.Component {
  componentDidMount() {
    const { dispatch, authentication, projects } = this.props;
    dispatch(getProfileProjects(authentication.id, 'creator'));
    dispatch(getProfileProjects(authentication.id, 'member'));
  }

  render() {
      const { authentication, projects } = this.props;

      if (!authentication.isLoggedIn) {
          return(
            <Redirect to='/login' />
          )
      }
      return (
        <div>
          <ProfileProjects title="Created:" projects={projects.userCreatedProjects}/>
          <ProfileProjects title="Member Of:" projects={projects.userMemberProjects}/>
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
    projects: state.projects
  };
}
  
export default connect(mapStateToProps)(ProfileProjectsContainer);

// TODO - ADD LOGIC FOR HANDLING STATE UPDATES BASED ON PROJECT EDITS AND INTEGRATE EDIT COMPONENT AND PROJECT CREATION