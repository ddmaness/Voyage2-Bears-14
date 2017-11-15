import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication';
import EditProfileReducer from './profile';
import ErrorReducer from './error';
import ProgressReducer from './progress';
import ProjectsReducer from './projects';

const reducers = {
  authentication: AuthenticationReducer,
  profile: EditProfileReducer,
  error: ErrorReducer,
  progress: ProgressReducer,
  projects: ProjectsReducer
};

export default combineReducers(reducers);