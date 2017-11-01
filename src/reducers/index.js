import { combineReducers } from 'redux';
import AuthenticationReducer from '../reducers/authentication';
import EditProfileReducer from '../reducers/profile';
import ProgressReducer from '../reducers/progress';

const reducers = {
  authentication: AuthenticationReducer,
  profile: EditProfileReducer,
  progress: ProgressReducer,
};

export default combineReducers(reducers);