import React from 'react';
import { Button } from 'reactstrap';

class ListItem extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <li key = {this.props.index} className = "list-group-item">
            <Button onClick = {this.props.deleteListItem}>X</Button>{this.props.item}
                </li>        
        )
    }
}

export default ListItem;
