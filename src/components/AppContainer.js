import React from 'react';
import { connect } from 'react-redux';
import { checkSession } from '../actions/authentication';

import App from './App';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.checkUserSession = this.checkUserSession.bind(this);
  }

  componentWillMount() {
    //call user session check before App component mounts
    this.checkUserSession();
  }

  checkUserSession() {
    const { dispatch } = this.props;
    dispatch(checkSession());
  }

  render() {
    const { authentication, progress } = this.props;
    return (
      <App 
        progress={progress}
        authentication={authentication}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    progress: state.progress,
    authentication: state.authentication,
  };
}

export default connect(mapStateToProps)(AppContainer);