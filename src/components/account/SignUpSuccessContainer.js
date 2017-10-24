import React from 'react';
import { connect } from 'react-redux';
import { registrationSuccessViewed } from '../../actions/authentication';

import SignUpSuccess from './SignUpSuccess';

export class SignUpSuccessContainer extends React.Component {

    componentWillMount() {
      const { dispatch } = this.props;
      dispatch(registrationSuccessViewed());
    }
  
    render() {
        return (
            <div>
                <SignUpSuccess />
            </div>
        );
    }
}

export default connect()(SignUpSuccessContainer);