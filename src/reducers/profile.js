const initialState = {
	background: '',
	skills: '',
	languages: '',
	timezone: '',
}

export default function reducer(state=initialState, action) {
	switch (action.type) {
		case 'EDIT_PROFILE_SUCCESS': {
			const newState = Object.assign({}, state);
			newState.background = action.json.background;
			newState.skills = action.json.skills;
			newState.languages = action.json.languages;
			newState.timezone = action.json.timezone;
			return newState;
		}
		case 'EDIT_PROFILE_FAILURE': {
			//TODO error message
			return state;
		}
		case 'AUTHENTICATION_LOGIN_SUCCESS': {
			const newState = Object.assign({}, state);
			newState.background = action.json.background;
			newState.skills = action.json.skills;
			newState.languages = action.json.languages;
			newState.timezone = action.json.timezone;
			return newState;
		} 
		case 'AUTHENTICATION_LOGOUT_SUCCESS': {
        	const newState = Object.assign({}, initialState);
        	return newState;
        }
		default: {
			return state;
		}
	}
}