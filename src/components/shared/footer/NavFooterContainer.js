import React from 'react';
import { connect } from 'react-redux';
import { logUserOut } from '../../../actions/authentication';

import NavFooter from './NavFooter';

class NavFooterContainer extends React.Component {
	constructor(props) {
		super(props);

		this.logUserOutFunction = this.logUserOutFunction.bind(this);
	}

	logUserOutFunction() {
	  const { dispatch } = this.props;
	  dispatch(logUserOut());
	}

	render() {
		const { authentication } = this.props;
		return (
			<NavFooter
				authentication={authentication}
				logUserOutFunction={this.logUserOutFunction}
			/>
		);
	}
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
  };
}

export default connect(mapStateToProps)(NavFooterContainer);