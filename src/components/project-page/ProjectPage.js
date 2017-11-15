import React from 'react';
import { Col, Row, Button, Jumbotron } from 'reactstrap';

// import styles and assets
import './project-page.css';
import projectPic from './project-placeholder.jpg';

export default class ProjectPage extends React.Component{
  constructor(props) {
    super(props);

    this.addTeamMember = this.addTeamMember.bind(this);
    this.removeTeamMember = this.removeTeamMember.bind(this);
    this.state = {
      teamMembers: [],
    }
  }

  componentDidMount() {
    if (this.props.project.team === undefined) {
      this.setState({
        teamMembers: [],
      })
    } else {
      this.setState({
        teamMembers: this.props.project.team,
      })
    }
  }

  addTeamMember() {
    const { updateProject } = this.props;
    const { _id, team, teamSize } = this.props.project;
    const { isLoggedIn, id } = this.props.authentication;
    if (team.length < teamSize) {
      this.setState({
        teamMembers: this.state.teamMembers.concat([id])
      }, function() {
        updateProject(_id, {team: this.state.teamMembers})
      });
    }
  }

  removeTeamMember() {
    const { updateProject } = this.props;
    const { _id, team, teamSize } = this.props.project;
    const { isLoggedIn, id } = this.props.authentication;
    const userIndex = this.state.teamMembers.indexOf(id);
    this.setState({
      teamMembers: this.state.teamMembers.filter((s, sindex) => userIndex !== sindex),
    }, function() {
      updateProject(_id, {team: this.state.teamMembers});
    });
  }

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
            <div className="text-center">
              <img src={projectPic} alt="Placeholder" className="img-fluid rounded" />
            </div>
          </Col>
          <Col sm="7" className="d-flex flex-column justify-content-center">
            <h1 className="display-3">{project.name}</h1>
            <p className="lead pt-2">Created By: {project.creatorName}</p>
            <Row>
              <Col>
                <p className="lead pt-2">Target Start Date: {project.startDate && project.startDate.slice(0,10)}</p>
              </Col>
              <Col>
                <p className="lead pt-2">Target End Date: {project.endDate && project.endDate.slice(0,10)}</p>
              </Col>
            </Row>
          </Col>
          <Col sm="2" className="d-flex flex-column justify-content-center">
            {authentication.id === project.creator &&
              <Button>
                Edit
              </Button>
            }
            {authentication.isLoggedIn && project.team && project.team.indexOf(authentication.id) !== -1 &&
              <Button onClick={() => this.removeTeamMember()}>
                Leave Team
              </Button>
            }
            {authentication.isLoggedIn && project.team && project.team.indexOf(authentication.id) === -1 &&
              authentication.isLoggedIn  &&
              authentication.id !== project.creator &&
              <Button onClick={() => this.addTeamMember()}>
                Join
              </Button>
            }
          </Col>
        </Row>
        <Row className="col-8 py-3">
          <p className="lead">{project.description}</p> 
        </Row>
        <Row className="col-8">
          <Jumbotron className="w-100 d-flex">
              <Col className="text-center">
                <p className="h5">Difficulty</p>
                {project.difficultyLevel === 'Easy' &&
                  <span className="project-badge-success">Easy</span>
                }
                {project.difficultyLevel === 'Intermediate' &&
                  <span className="project-badge-warning">Intermediate</span>
                }
                {project.difficultyLevel === 'Advanced' &&
                  <span className="project-badge-danger">Advanced</span>
                }
              </Col>
              <Col className="text-center">
                <p className="h5">Spots Remaining</p>
                {!project.team &&
                  <span className="project-badge-success">{project.teamSize}</span>               
                }
                {project.team && project.teamSize - project.team.length > 0 &&
                  <span className="project-badge-info">{project.teamSize - project.team.length}</span>               
                }
                {project.team && project.teamSize - project.team.length === 0 &&
                  <span className="project-badge-danger">FULL</span>               
                }
              </Col>
              <Col className="text-center">
                <p className="h5">Project Status</p>
                {project.status === 'Recruiting' &&
                  <span className="project-badge-success">Recruiting</span>               
                }
                {project.status === 'Developing' &&
                  <span className="project-badge-info">Developing</span>               
                }
                {project.status === 'Complete' &&
                  <span className="project-badge-default">Complete</span>               
                }
              </Col>
          </Jumbotron>
        </Row>
      </Row>
    );
  }
}
