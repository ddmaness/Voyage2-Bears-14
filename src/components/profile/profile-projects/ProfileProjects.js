import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Table } from 'reactstrap';

export default class ProfileProjects extends React.Component {
  render() {
    const { title, projects, userAuth } = this.props;

    return(
      <div>
        <Row className="profile-info-section mt-5 justify-content-center">
          <Row className="profile-info-header justify-content-around">
            <h3>
              {title}
            </h3>
            {title === "Created:" &&
              <Link 
                to={`/${userAuth.username}/projects/new`}
                className="btn btn-primary btn-outline"
              >
                Create New Project
              </Link>
            }
          </Row>
          <Row>
            <Table bordered>
              <thead>
                <tr>
                  <th className="project-cell">Project</th>
                  <th className="project-cell">Team Size</th>
                  <th className="project-cell">Status</th>
                  <th className="project-cell">Start Date</th>
                  <th className="project-cell">End Date</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, i) => {
                  return(
                    <tr key={i}>
                      <th>
                        <Link to={`/projects/${project.name}`}>
                          {project.name}
                        </Link>
                      </th>
                      <td className="project-cell">{project.teamSize}</td>
                      <td className="project-cell">{project.status}</td>
                      <td className="project-cell">{project.startDate.slice(0,10)}</td>
                      <td className="project-cell">{project.endDate.slice(0,10)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Row>
        </Row>
      </div>
    );
  }
}