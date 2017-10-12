import React, { Component } from 'react';
import './ProjectListPage.css';
import ProjectCard from '../ProjectCard/ProjectCard'

export default class ProjectsListPage extends Component{
constructor(props){
    super(props);
    this.state={
      postedProjects:['example1','example2','example3','example4','example5','example6']
    }
  }

render(){
  const pages=this.state.postedProjects.map((project,i)=>{
        return(
          <ProjectCard key={i} id={i} history={this.props.history}/>
      )
  })
    return(
      <section id="postpage">
        <div  className="container">
          <h1 id='explore-projects'>Explore Projects</h1>
          <form className="input-form">
            <div className="list-search">
              <div className="col-lg-6 col-md-6 col-sm-8 col-xs-10 input-group">
                <input className="form-control" type="text" placeholder="Search by title or keyword..."/>
                <span className="input-group-btn">
                <button type="submit" className="btn btn-success search-button">Search</button>
                </span>
              </div>
            </div>
          </form>
            <div className="row">
              {pages}
            </div>
        </div>
      </section>
    )
  }



}
