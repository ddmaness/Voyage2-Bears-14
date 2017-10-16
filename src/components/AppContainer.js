import React from 'react';
import { connect } from 'react-redux';
import App from './App';

function AppContainer(props) {
  return (
    <App progress={props.progress} />
  );
}

function mapStateToProps(state) {
  return {
    progress: state.progress,
  };
}

export default connect(mapStateToProps)(AppContainer);