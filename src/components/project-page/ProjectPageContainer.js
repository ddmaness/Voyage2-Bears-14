import React from 'react';
import { connect } from 'react-redux';

import ProjectPage from './ProjectPage';
// TODO -> add project edit page and conditional logid in render function

import { getProject, updateProject, switchProjectEditMode } from '../../actions/projects';

export class ProjectPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {},
    }
  }

  componentDidMount() {
    const { getProject } = this.props;
    getProject(this.props.match.params.projectId);
  }

  render() {
    const { authentication, userMemberProjects, isEditingProject, project, switchProjectEditMode } = this.props;

    return(
      <ProjectPage 
        authentication={authentication}
        project={project}
        isEditingProject={isEditingProject}
        switchEdit={switchProjectEditMode}
        userMemberProjects={userMemberProjects}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
    userCreatedProjects: state.projects.userCreatedProjects,
    userMemberProjects: state.projects.userMemberProjects,
    isEditingProject: state.projects.isEditingProject,
    project: state.projects.openProject,
  };
}
  
export default connect(mapStateToProps, { switchProjectEditMode, updateProject, getProject })(ProjectPageContainer);