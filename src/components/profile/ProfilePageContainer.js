import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ProfilePage from './ProfilePage';

export class ProfilePageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.switchToEdit = this.switchToEdit.bind(this);
    this.state = {
      isEditing: false
    }
  }

  switchToEdit(setting) {
    console.log("switched");
    this.setState({
      isEditing: setting
    });
  }

  render() {
    const { authentication, profile } = this.props;

    if (!authentication.isLoggedIn) {
      return(
        <Redirect to='/login' />
      );
    }
    return(
      <ProfilePage 
        userAuth={authentication}
        userProfile={profile}
        switchEdit={this.switchToEdit}
        isEditing={this.state.isEditing}
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
  
export default connect(mapStateToProps)(ProfilePageContainer);