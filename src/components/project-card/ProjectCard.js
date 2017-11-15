import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

export default class ProjectCard extends Component{
  render(){
    const { project } = this.props;

    return (
      <div className="col-sm-6 col-lg-4 project-card">
        <Card>
          <Link to={`/projects/${project._id}`}>
            <CardImg 
              top width="100%"
              className="card-img" 
              src="https://i.pinimg.com/736x/1a/19/7f/1a197f0581e490029fd743ea25aa7eb7--double-chin-the-double.jpg"
              alt="Project card image top"
            />
          </Link>
          <CardBody>
            <CardTitle>{project.name}</CardTitle>
            <CardText>{project.description}</CardText>
          </CardBody>
          <CardFooter className="d-flex flex-row justify-content-between align-content-center">
            <p>Starts: <span className="start-date">{project.startDate.toString().slice(0,10)}</span></p>
            <a href={project.githubUrl || 'http://www.github.com'} className="repo-link"><i className="fa fa-github fa-2x"></i></a>
          </CardFooter>
        </Card>
      </div>
    );
  }
}
