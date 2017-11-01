import 'whatwg-fetch';
import { decrementProgress, incrementProgress } from './progress';

export const editProfileSuccess = json => ({ type: 'EDIT_PROFILE_SUCCESS' });
export const editProfileFailure = error => ({ type: 'EDIT_PROFILE_FAILURE' });

export function editProfile(userData) {
    return async (dispatch) => {
      // turn on spinner
      dispatch(incrementProgress());
  
      // contact the API
      await fetch(
        // where to contact 
        // TODO create api route for /profile
        '/api/authentication/profile',
        // what to send
        {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'same-origin',
        },
      )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then(async (json) => {
        if (json) {
          await dispatch(editProfileSuccess(json));
        } else {
          dispatch(editProfileFailure(new Error('Failed To Update Profile')));
        }
      })
      .catch((error) => {
        dispatch(editProfileFailure(new Error(error)));
      });
  
      // turn off spinner
      return dispatch(decrementProgress());
    };
}