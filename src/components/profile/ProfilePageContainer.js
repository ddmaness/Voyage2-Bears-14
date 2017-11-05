import React from 'react';
import { connect } from 'react-redux';

import ProfilePage from './ProfilePage';

export class ProfilePageContainer extends React.Component {
  render() {
      const { authentication } = this.props;

      if (authentication.isLoggedIn) {
          return (
              <ProfilePage user={authentication}/>
          );
      }

      return (
        <div>
          <p>Please log in to view your profile page</p>
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
  };
}
  
export default connect(mapStateToProps)(ProfilePageContainer);