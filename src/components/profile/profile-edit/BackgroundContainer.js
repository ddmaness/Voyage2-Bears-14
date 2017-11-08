import React from 'react';
import { connect } from 'react-redux';

import { editProfileFunction } from '../../../actions/profile';
import EditBackground from './Background';

class EditBackgroundContainer extends React.Component {
	constructor(props) {
		super(props);

		// bound functions
		this.editProfile = this.editProfile.bind(this);
	}
	
  editProfile(userData) {
    const { dispatch, switchEdit } = this.props;
    dispatch(editProfileFunction(userData));
  }

	render() {
		return (
			<EditBackground 
        userAuth = {this.props.userAuth} 
        userProfile = {this.props.userProfile} 
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

export default connect(mapStateToProps)(EditBackgroundContainer);
