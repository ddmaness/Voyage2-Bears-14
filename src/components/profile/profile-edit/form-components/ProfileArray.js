import React from 'react';
import { Form, FormGroup, Label, Button, Input } from 'reactstrap';

import { compileFormData, handleInputChange, handleKeyPress, pushToArray, deleteListItem } from '../../../../utils/utilityFunctions';
import ListItem from './ListItem';


class EditProfileArray extends React.Component {
  constructor(props) {
		super(props);
		
		const { targetInfo } = this.props;

		this.state = {
			id: this.props.userAuth.id,
			currentInput: '',
			[targetInfo]: this.props.userProfile[targetInfo],
		}

		//bound functions
		this.compileFormData = compileFormData.bind(this);
		this.handleInputChange = handleInputChange.bind(this);
		this.handleKeyPress = handleKeyPress.bind(this);
		this.pushToArray = pushToArray.bind(this);
		this.deleteListItem = deleteListItem.bind(this);
	}

  render(){
	  const { currentInput } = this.state;
		const { toggleEdit, heading, targetInfo, placeholder } = this.props;

    console.log(this.state[targetInfo]);
		// iterate through elements in the state array and display them as list items
		let listItems = this.state[targetInfo].map((elem, index) => {
      return (
				<ListItem
					style = {index % 2 != 0 ? "odd-list-item" : "even-list-item"}
          item = {elem}
          key = {index}
          deleteListItem = {() => this.deleteListItem(this.state[targetInfo], targetInfo, index)}
        />
      )
		})

		return (
			<Form className = "isEditing">
				<FormGroup row>
					<Label className = "form-field-label" for={targetInfo}>{heading}</Label>
          <Input
            id={targetInfo}
            name={targetInfo}
            onChange={this.handleInputChange}
            onKeyPress={(e) => this.handleKeyPress(currentInput, this.state[targetInfo], targetInfo, e)}
            placeholder={placeholder}
            value={this.state.currentInput}
          />
				</FormGroup>
				<Button 
          className = "list" 
          outline color = "primary" 
          onClick= {(e) => this.pushToArray(currentInput, this.state[targetInfo], targetInfo, e)}
        >
          Add
				</Button>
				<br/>
				<ul>
				{listItems}
				</ul>
				<Button className="list-confirm list" outline color = "primary" onClick={this.compileFormData}>Save Changes</Button>
				<Button className = "cancel list" outline color="danger" onClick = {toggleEdit}>Cancel</Button>
			</Form>
		)
	}
}

export default EditProfileArray;