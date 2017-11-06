import React from 'react';
import { Form, FormGroup, Row, Col, Label, Button, Input } from 'reactstrap';

import { compileFormData, handleInputChange, handleKeyPress } from '../../../utils/utilityFunctions';


class EditProfile extends React.Component {
  constructor(props) {
		super(props);
        
        const { targetInfo, userProfile } = this.props
        
		this.state = {
			id: this.props.userAuth.id,
			isEditing: false,
			targetInfo: userProfile[targetInfo],
		}

		//bound functions
		this.compileFormData = compileFormData.bind(this);
		this.handleInputChange = handleInputChange.bind(this);
		this.handleKeyPress = handleKeyPress.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);

	}

	toggleEdit() {
		this.setState({isEditing: !this.state.isEditing})
	}

  render(){
		const { editProfile, Comp, targetInfo, heading, description, userAuth, userProfile } = this.props;
        const { isEditing } = this.state;
		if (isEditing === false) {
    	return (
				<Row className="profile-info-section">
					<Row className="profile-info-header justify-content-center">
						<h3>
							{heading} <small className="text-muted">{description}</small>
						</h3>
						<Button outline color="primary" className = "edit" onClick = {this.toggleEdit}>Edit</Button>
					</Row>
					<Col>
						{userProfile[targetInfo] &&
							<p className="profile-info-item">{userProfile[targetInfo]}</p>
						}
						{!userProfile[targetInfo] &&
							<p className="profile-info-item">Edit your profile to add this information.</p>
						}
					</Col>
				</Row>
			)
		}
		else {
			return (
                <Comp 
                    userAuth = {userAuth}
                    userProfile = {userProfile}
                    editProfile = {editProfile}
                    toggleEdit = {this.toggleEdit}
                />
			)
		}
  }
}

export default EditProfile;