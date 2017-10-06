import React, { Component } from 'react';
import './Postpage.css';

export default class Postpage extends Component{
constructor(props){
    super(props);
    this.state={
      postedProjects:['example1','example2','example3','example3','example4','example5','example6']
    }
  }

render(){
  const pages=this.state.postedProjects.map((project,i)=>{
        return(
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 post-project" key={i}>
          <div className="project-listing-card">
            <div>
              <img src="https://i.pinimg.com/736x/1a/19/7f/1a197f0581e490029fd743ea25aa7eb7--double-chin-the-double.jpg" alt="ProjectIMG"/>
            </div>

          <div className='list-card'>
            <h3>Hello World</h3>
              <div className="list-description-div">
                <p className="list-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium culpa quod a aspernatur illum in quam at eum repellat autem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque rem aperiam quo possimus ducimus commodi fugit aliquid ea minima beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae amet sit quia optio vitae illum beatae. Deleniti, quae mollitia odio.</p>
              </div>
            <hr/>
              <div>
                <p className="expectation-date-to-apply"><span className="expectation-date">2 Months</span> To Apply</p>
                <span className="pull-right">Save <i className="fa fa-bookmark" aria-hidden="true"></i></span>
              </div>

            </div>
          </div>
        </div>
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
