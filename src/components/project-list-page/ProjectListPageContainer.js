import React from 'react';
import { connect } from 'react-redux';

import ProjectListPage from './ProjectListPage';
import { fetchProjectsData } from '../../actions/projects';

export class ProjectListPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
    const { fetchProjectsData } = this.props;
    fetchProjectsData();
  }

  render() {
    const { authentication, userCreatedProjects, userMemberProjects, projectsList } = this.props;

    return(
      <ProjectListPage
        authentication={authentication}
        projectsList={projectsList}
        userCreatedProjects={userCreatedProjects}
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
    projectsList: state.projects.projectsList,
  };
}

export default connect(mapStateToProps, { fetchProjectsData })(ProjectListPageContainer);