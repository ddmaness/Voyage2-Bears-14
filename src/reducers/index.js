import { combineReducers } from 'redux';
import AuthenticationReducer from '../reducers/authentication';
import EditProfileReducer from '../reducers/profile';
import ErrorReducer from '../reducers/error';
import ProgressReducer from '../reducers/progress';

const reducers = {
  authentication: AuthenticationReducer,
  profile: EditProfileReducer,
  error: ErrorReducer,
  progress: ProgressReducer,
};

export default combineReducers(reducers);