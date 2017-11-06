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
				<FormGroup row>
					<Label for="languages">Languages</Label>
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
				<Button outline color = "primary" onClick={this.compileFormData}>Save Changes</ Button>
				<Button className = "cancel" onClick = {toggleEdit}>Cancel</Button>
			</Form>
		)
	}
}

export default EditLanguages;