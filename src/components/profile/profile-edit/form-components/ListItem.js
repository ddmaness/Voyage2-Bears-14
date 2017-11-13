import React from 'react';
import { Button } from 'reactstrap';

import Icon from '../../../shared/icons/Icon';
import {ICONS} from '../../../shared/icons/icons';
import '../../ProfilePage.css';

class ListItem extends React.Component {
  render(){
    return (
      <li className = {"list-group-item " + this.props.style}>
        <Button className = "remove-item-btn" outline color="danger" onClick = {this.props.deleteListItem}>
				<Icon icon = {ICONS.BIN} size={16} classProp = {"trash"}/>
        </Button>{this.props.item}
      </li>        
    )
  }
}

export default ListItem;
