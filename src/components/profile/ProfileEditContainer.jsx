import React from 'react';
import { connect } from 'react-redux';
import { editProfileSuccess } from '../../actions/profile';

import ProfileEdit from './ProfileEdit';

class ProfileEditContainer extends React.Component {
	constructor(props) {
		super(props);

		// bound functions
		this.editProfileFunction = this.editProfileFunction.bind(this);
	}

	editProfileFunction(userData) {
		const { dispatch } = this.props;
		dispatch(editProfileSuccess(userData))
	}

	render() {
		return (
			<ProfileEdit editProfile = {this.editProfileFunction} />
		);
	}
}

const mapStateToProps = state => ({ authentication: state.authentication });

export default connect(mapStateToProps)(ProfileEditContainer);
