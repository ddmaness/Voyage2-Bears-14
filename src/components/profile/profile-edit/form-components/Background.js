import React from 'react';
import { Form, FormGroup, Label, Button, Input } from 'reactstrap';

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
		const { toggleEdit } = this.props;
		return (
			<Form>
<<<<<<< HEAD
				<FormGroup row className="justify-content-center">
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
        <FormGroup row className="justify-content-center">
          <Button outline color="primary" onClick={this.compileFormData}>Save Changes</Button>
          <Button outline className="ml-3" color="danger" onClick = {toggleEdit}>Cancel</Button>
        </FormGroup>
=======
				<FormGroup row>
					<Label for="background">Background</Label>
						<Input
							id="background"
							name="background"
							onChange={this.handleInputChange}
							onKeyPress={(e) => this.handleKeyPress(null, null, null, e)}
							placeholder="Describe your background"
							type="textarea"
							value={this.state.background}
					/>
				</FormGroup>
				<Button outline color = "primary" onClick={this.compileFormData}>Save Changes</ Button>
				<Button className = "cancel" onClick = {toggleEdit}>Cancel</Button>
>>>>>>> bc95dacb61aae8ef8367e5c5f8dcc38ce5593b36
			</Form>
		)
	}
}

export default EditBackground;