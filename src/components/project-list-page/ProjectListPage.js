import React from 'react';
import { Container } from 'reactstrap';
import './ProjectListPage.css';
import ProjectCard from '../project-card/ProjectCard';

export default class ProjectsListPage extends React.Component {
  constructor(props){
      super(props);
      
      this.state={
        postedProjects:['example1','example2','example3','example4','example5','example6']
      }
    }

  render() {
    const pages = this.state.postedProjects.map((project,i)=>{
      return(
        <ProjectCard key={i} id={i} history={this.props.history}/>
      )
    })

    return(
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
          {pages}
        </div>
      </Container>
    )
  }
}