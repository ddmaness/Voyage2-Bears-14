import React,{Component} from 'react';

export default class Projectpage extends Component{
  render(){
    return(
      <div>
        <h1>Example Project : {this.props.match.params.id}</h1>
      </div>
    )
  }
}
