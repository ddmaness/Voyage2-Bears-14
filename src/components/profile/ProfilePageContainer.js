import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ProfilePage from './ProfilePage';

export class ProfilePageContainer extends React.Component {
  render() {
      const { authentication } = this.props;

      if (!authentication.isLoggedIn) {
          return(
            <Redirect to='/login' />
          )
      }
      return (
        <ProfilePage user={authentication}/>
      );
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
  };
}
  
export default connect(mapStateToProps)(ProfilePageContainer);