import React from 'react';
import { Button } from 'reactstrap';
import '../../ProfilePage.css'

class ListItem extends React.Component {
    render(){
        return (
            <li className = {"list-group-item " + this.props.style}>
            <Button className = "remove-item-btn" outline color="danger" onClick = {this.props.deleteListItem}>X</Button>{this.props.item}
                </li>        
        )
    }
}

export default ListItem;
