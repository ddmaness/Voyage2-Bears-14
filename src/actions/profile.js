import 'whatwg-fetch';
import { decrementProgress, incrementProgress } from './progress';
import { clearError } from './error';

export const editProfileSuccess = json => ({ type: 'EDIT_PROFILE_SUCCESS', json });
export const editProfileFailure = error => ({ type: 'EDIT_PROFILE_FAILURE', error });

export function editProfileFunction(userData) {
    return async(dispatch) => {
        console.log(JSON.stringify(userData))
        // clear the error box if it's displayed
        dispatch(clearError());
        
    	  //turn on spinner
    	  dispatch(incrementProgress());
	  
        // contact the API
        await fetch(
        // where to contact
        '/api/profile/edit-profile', 
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
            	await dispatch(editProfileFailure(new Error('Failed To Update Profile')));
            }
        })
        .catch((error) => {
        	dispatch(editProfileFailure(new Error(error)));
        });
        // turn off spinner
        dispatch(decrementProgress());
    }
}