const initialState = {
	projectsList: [],
  currentProject: '',
  userCreatedProjects: [],
  userMemberProjects: [],
}

export default function reducer(state=initialState, action) {
	switch (action.type) {
    case 'PROJECT_CREATE_SUCCESS':
    case 'PROJECT_CREATE_FAILURE': {
			return state;
    }
    case 'PROJECT_GET_PROFILE_LIST_SUCCESS_CREATOR': {
			const newState = Object.assign({}, state);
      newState.userCreatedProjects = action.json;
			return newState;
    }
    case 'PROJECT_GET_PROFILE_LIST_SUCCESS_MEMBER': {
			const newState = Object.assign({}, state);
      newState.userMemberProjects = action.json;
			return newState;
    }
    default: {
      return state;
    }
	}
}