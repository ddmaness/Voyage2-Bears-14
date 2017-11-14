import React from 'react';
import { Progress } from 'reactstrap';
import '../ProfilePage.css'


class EditBackground extends React.Component {
	calculateProgress = profile => {
		let progress = 0;
		if (profile.background !== '' && profile.background !== undefined) {
			progress += 25;
		}
		if (profile.skills.length !== 0) {
			progress += 25;
		}
		if (profile.languages.length !== 0) {
			progress += 25;
		}
		if (profile.timezone !== '' && profile.timezone !== undefined) {
			progress += 25;
		}
		return progress
	}

  render(){
		const { userProfile } = this.props;
		const totalProgress = this.calculateProgress(userProfile);
		return (
			<div className = "profile-completion">
				<p className = "profile-total-completion-info" >Your profile is <span className = "percent-progress">{totalProgress}%</span> complete</p>
				<Progress color = "info" value = {totalProgress}/>
				<p className = "profile-completion-info">Please take a moment to complete your profile so that your fellow developers can get to know more about you</p>
			</div>
		)
	}
}

export default EditBackground;