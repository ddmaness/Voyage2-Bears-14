import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { editProfileFunction } from '../../../actions/profile';
import ProfileEdit from './ProfileEdit';

class ProfileEditContainer extends React.Component {
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
    const { isLoggedIn } = this.props.authentication;

    if (!isLoggedIn) {
        return(
          <Redirect to='/login' />
        )
    }

		return (
			<ProfileEdit 
        profile = {this.props.profile} 
        authentication = {this.props.authentication} 
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

export default connect(mapStateToProps)(ProfileEditContainer);
