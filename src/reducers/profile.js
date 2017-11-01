const initialState = {
	background: '',
	skills: '',
	language: '',
	timezone: '',
}

export default function reducer(state=initialState, action) {
	switch (action.type) {
		case 'EDIT_PROFILE_SUCCESS': {
			const newState = Object.assign({}, state);
			newState.background = action.json.background;
			newState.skills = action.json.skills;
			newState.language = action.json.language;
			newState.timezone = action.json.timezone;
			return newState;
		}
		case 'EDIT_PROFILE_FAILURE': {
			//TODO error message
			return state;
		}
		default: {
			return state;
		}
	}
}