import React from 'react';
import { Form, FormGroup, Row, Col, Label, Button, Input } from 'reactstrap';

import { compileFormData, handleInputChange, handleKeyPress } from '../../../../utils/utilityFunctions';


class EditBackground extends React.Component {
  constructor(props) {
		super(props);
		
		this.state = {
			id: this.props.userAuth.id,
			background: this.props.userProfile.background,
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
					<Label for="background">Background</Label>
						<Input
							id="background"
							name="background"
							onChange={this.handleInputChange}
							onKeyPress={this.handleKeyPress}
							placeholder="Describe your background"
							type="textarea"
							value={this.state.background}
					/>
				</FormGroup>
				<Button outline color = "primary" onClick={this.compileFormData}>Save Changes</ Button>
				<Button className = "cancel" onClick = {toggleEdit}>Cancel</Button>
			</Form>
		)
	}
}

export default EditBackground;