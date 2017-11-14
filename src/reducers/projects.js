const initialState = {
	projectsList: [],
  currentProject: '',
  userCreatedProjects: [],
  userMemberProjects: [],
  createProjectSucceeded: false,
  updateProjectSucceeded: false,
  isEditingProject: false,
  openProject: {},
}

export default function reducer(state=initialState, action) {
	switch (action.type) {
    case 'PROJECT_CREATE_SUCCESS': {
			const newState = Object.assign({}, state);
      newState.createProjectSucceeded = true;
			return newState;
    }
    case 'PROJECT_UPDATE_SUCCESS': {
			const newState = Object.assign({}, state);
      newState.updateProjectSucceeded = true;
			return newState;
    }
    case 'PROJECT_CREATE_FAILURE':
    case 'PROJECT_GET_PROFILE_LIST_FAILURE':
    case 'PROJECTS_GET_FAILURE':
    case 'PROJECT_UPDATE_FAILURE': {
			return state;
    }
    case 'PROJECTS_GET_SUCCESS': {
      const newState = Object.assign({}, state);
      newState.projectsList = action.json;
      return newState;
    }
    case 'PROJECT_GET_SUCCESS': {
      const newState = Object.assign({}, state);
      newState.openProject = action.json;
      console.log(newState.openProject);
      return newState;
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
    case 'PROJECT_SWITCH_EDIT_MODE': {
      const newState = Object.assign({}, state);
      newState.isEditingProject = !state.isEditingProject;
      return newState;
    }
    default: {
      return state;
    }
	}
}