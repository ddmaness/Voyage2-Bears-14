import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter } from 'reactstrap';
import './ProjectCard.css';

export default class ProjectCard extends Component{
  render(){
    return (
      <div className="col-sm-6 col-lg-4 project-card">
        <Card>
          <CardImg top width="100%" className="card-img" src="https://i.pinimg.com/736x/1a/19/7f/1a197f0581e490029fd743ea25aa7eb7--double-chin-the-double.jpg" alt="Project card image top" />
          <CardBody>
            <CardTitle>Project Title</CardTitle>
            <CardSubtitle>Project subtitle</CardSubtitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium culpa quod a aspernatur illum in quam at eum repellat autem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque rem aperiam quo possimus ducimus commodi fugit aliquid ea minima beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae amet sit quia optio vitae illum beatae. Deleniti, quae mollitia odio</CardText>
          </CardBody>
          <CardFooter>
            <p className="expectation-date-to-apply"><span className="expectation-date">2 Months</span> To Apply</p>
            <span className="pull-right">Save <i className="fa fa-bookmark" aria-hidden="true"></i></span>
          </CardFooter>
        </Card>
      </div>
    );
  }
}
