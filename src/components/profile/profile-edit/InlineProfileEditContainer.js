import React from 'react';
import { connect } from 'react-redux';

import { editProfileFunction } from '../../../actions/profile';
import ProfileEdit from './InlineProfileEdit';

class EditProfileContainer extends React.Component {
	constructor(props) {
		super(props);

		// bound functions
		this.editProfile = this.editProfile.bind(this);
	}
	
  editProfile(userData) {
    const { dispatch } = this.props;
    dispatch(editProfileFunction(userData));
  }

	render() {
    const { Comp, heading, description, targetInfo, userAuth, userProfile } = this.props;
		return (
      <ProfileEdit
        Comp = {Comp}
        heading = {heading}
        description = {description}
        targetInfo = {targetInfo}
        userAuth = {userAuth} 
        userProfile = {userProfile} 
        editProfile = {this.editProfile}
      />
		);
	}
}

function mapStateToProps(state) {
	return { 
		authentication: state.authentication, 
		profile: state.profile,
	};
}

export default connect(mapStateToProps)(EditProfileContainer);
