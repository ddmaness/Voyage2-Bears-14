import React from 'react';
import { connect } from 'react-redux';

import AboutSection from './AboutSection';

class AboutSectionContainer extends React.Component {
	
  render(){
  	return(
			<AboutSection userAuth={this.props.authentication}/>
		)
	}
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
  };
}
    
  export default connect(mapStateToProps)(AboutSectionContainer);