import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ProfileCreateProject from './ProfileCreateProject';

export class ProfileCreateProjectContainer extends React.Component {
  render() {
      const { authentication } = this.props;

      if (!authentication.isLoggedIn) {
          return(
            <Redirect to='/login' />
          )
      }
      return (
        <div>
          <ProfileCreateProject />
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
  };
}
  
export default connect(mapStateToProps)(ProfileCreateProjectContainer);