import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ProfilePage from './ProfilePage';

export class ProfilePageContainer extends React.Component {
  render() {
      const { authentication, profile } = this.props;

      if (!authentication.isLoggedIn) {
          return(
            <Redirect to='/login' />
          )
      }
      return (
        <ProfilePage userAuth={authentication} userProfile={profile}/>
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