import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from './App';
import { sessionCheckFailure, sessionCheckSuccess } from '../actions/authentication';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.checkSession = this.checkSession.bind(this);
  }

  componentWillMount() {
    //call user session check before App component mounts
    this.checkSession();
  }

  async checkSession() {
    const { sessionCheckFailureAction, sessionCheckSuccessAction } = this.props;
    // contact the API
    await fetch(
      // where to contact
      '/api/authentication/checksession',
      // what to send
      {
        method: 'GET',
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
      if (json.username) {
        sessionCheckSuccessAction(json);
      } else {
        sessionCheckFailureAction();
      }
    })
    .catch((error) => {
      sessionCheckFailureAction(error);
    });
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sessionCheckFailureAction: sessionCheckFailure,
    sessionCheckSuccessAction: sessionCheckSuccess,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    progress: state.progress,
    authentication: state.authentication,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);