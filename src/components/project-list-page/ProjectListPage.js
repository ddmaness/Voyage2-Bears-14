import React from 'react';
import { Container } from 'reactstrap';
import './ProjectListPage.css';
import ProjectCard from '../project-card/ProjectCard';
import NavFooter from '../shared/footer/NavFooterContainer'

export default class ProjectsListPage extends React.Component {
  render() {
    const { projectsList } = this.props;

    const projects = projectsList.map(project => {
      return(
        <ProjectCard key={project._id} project={project}/>
      )
    })

    return(
      <div className="pt-4">
        <Container>
          <div className="d-flex flex-row justify-content-center pt-5">
            <h1 id='explore-projects'>Explore Projects</h1>
          </div>
          <div className="d-flex flex-row justify-content-center">
            <form className="input-form mb-5 mt-2 col-md-10 col-lg-8">
              <div className="input-group">
                <input className="form-control" type="text" placeholder="Search Projects..."/>
                <span className="input-group-btn">
                  <button type="button" className="btn btn-success search-button">Search</button>
                </span>
              </div>
            </form>
          </div>
          <div className="row">
            {projects}
          </div>
        </Container>
        <NavFooter/>
      </div>
    )
  }
}