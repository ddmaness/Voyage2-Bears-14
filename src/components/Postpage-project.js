import React,{Component} from 'react';


export default class PostpageProject extends Component{
  render(){
    return(
      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 post-project" >
          <div className="project-listing-card" onClick={()=>this.props.history.push(`/project-page/${this.props.id}`)}>
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
  }
}
