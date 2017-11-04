import 'whatwg-fetch';
import { decrementProgress, incrementProgress } from '../../actions/progress';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editProfileSuccess, editProfileFailure } from '../../actions/profile';

import ProfileEdit from './ProfileEdit';

class ProfileEditContainer extends React.Component {
	constructor(props) {
		super(props);

		// bound functions
		this.editProfileFunction = this.editProfileFunction.bind(this);
	}

	async editProfileFunction(userData) {
    	const {
    		decrementProgressAction,
    		incrementProgressAction,
    		editProfileSuccessAction,
    		editProfileFailureAction,
    	} = this.props;

    	//turn on spinner
    	incrementProgressAction();
	  
        // contact the API
        const resp = await fetch(
        // where to contact
        'api/profile/edit-profile', 
        // what to send
        {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'same-origin',
        },
      )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json) => {
        if (json) {
            editProfileSuccessAction(json);
        } else {
            editProfileFailureAction(new Error('Failed To Update Profile'));
            }
        })
        .catch((error) => {
            editProfileFailureAction(new Error(error));
        });
  		
  		console.log(resp);

      // turn off spinner
      decrementProgressAction();
    }

	render() {
		return (
			<ProfileEdit 
			profile = {this.props.profile} 
			authentication = {this.props.authentication} 
			editProfile = {this.editProfileFunction} />
		);
	}
}

function mapStateToProps(state) {
	return { 
		authentication: state.authentication, 
		profile: state.profile,
	};
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		decrementProgressAction: decrementProgress,
		incrementProgressAction: incrementProgress,
		editProfileSuccessAction: editProfileSuccess,
		editProfileFailureAction: editProfileFailure,
	}, dispatch);
} 

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditContainer);
