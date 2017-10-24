import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logUserIn } from '../../actions/authentication';

import Login from './Login';

export class LoginContainer extends React.Component {
    constructor(props) {
      super(props);

      //bound functions
      this.logUserInFunction = this.logUserInFunction.bind(this);
    }

    logUserInFunction(userData) {
        const { dispatch } = this.props;
        dispatch(logUserIn(userData));
    }

    render() {
        const { authentication } = this.props;

        if (authentication.isLoggedIn) {
            return (
                <Redirect to="/" />
            );
        }

        return (
            <div>
                <Login loginFunction={this.logUserInFunction} />
            </div>
        );
    }
  }

  function mapStateToProps(state) {
    return {
      authentication: state.authentication,
    };
  }
  
  export default connect(mapStateToProps)(LoginContainer);