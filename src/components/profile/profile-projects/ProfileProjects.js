import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Table, Button } from 'reactstrap';

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
            <Table>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Team Size</th>
                  <th>Status</th>
                  <th>Start Date</th>
                  <th>End Date</th>
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
                      <td className="lead">{project.teamSize}</td>
                      <td className="lead">{project.status}</td>
                      <td className="lead">{project.startDate.slice(0,10)}</td>
                      <td className="lead">{project.endDate.slice(0,10)}</td>
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