import React from 'react';
import { Form, FormGroup, Row, Col, Label, Button, Input } from 'reactstrap';

import { compileFormData, handleInputChange, handleKeyPress } from '../../../../utils/utilityFunctions';


class EditLanguages extends React.Component {
  constructor(props) {
		super(props);
		
		this.state = {
			id: this.props.userAuth.id,
			languages: this.props.userProfile.languages,
		}

		//bound functions
		this.compileFormData = compileFormData.bind(this);
		this.handleInputChange = handleInputChange.bind(this);
		this.handleKeyPress = handleKeyPress.bind(this);
	}

  render(){
		const { toggleEdit, heading, description, userAuth, userProfile } = this.props;
		return (
			<Form>
        <FormGroup row className="justify-content-center">
          <Input
            id="languages"
            name="languages"
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
            placeholder="Add languages that you speak"
            type="textarea"
            value={this.state.languages}
          />
        </FormGroup>
        <FormGroup row className="justify-content-center">
          <Button outline color="primary" onClick={this.compileFormData}>Save Changes</Button>
          <Button outline color="danger" className="ml-3" onClick = {toggleEdit}>Cancel</Button>
        </FormGroup>
			</Form>
		)
	}
}

export default EditLanguages;