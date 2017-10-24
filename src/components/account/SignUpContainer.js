import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { registerUser } from '../../actions/authentication';

import SignUp from './SignUp';

export class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);

    // bound functions
    this.signupFunction = this.signupFunction.bind(this);
  }

  signupFunction(userData) {
    const { dispatch } = this.props;
    dispatch(registerUser(userData));
  }

  render() {
    const { isLoggedIn, registrationSucceeded } = this.props.authentication;

    // Forward to a success page
    if (registrationSucceeded) {
        return (
            <Redirect to="/account/sign-up-success" />
        );
    }

    // User needs to be logged out to register
    if (isLoggedIn) {
      console.log("already loggedin");
      return <p>Please log out before registering a new user</p>;
    }

    // Otherwise display the form
    return <SignUp signupFunction={this.signupFunction} />;
  }
}

const mapStateToProps = state => ({ authentication: state.authentication });

export default connect(mapStateToProps)(SignUpContainer);