import 'whatwg-fetch';
import { decrementProgress, incrementProgress } from './progress';
import { clearError } from './error';

export const createProjectFailure = error => ({ type: 'PROJECT_CREATE_FAILURE', error });
export const createProjectSuccess = json => ({ type: 'PROJECT_CREATE_SUCCESS', json });
export const deleteProjectFailure = error => ({ type: 'PROJECT_DELETE_FAILURE', error });
export const deleteProjectSuccess = json => ({ type: 'PROJECT_DELETE_SUCCESS', json });
export const getProjectFailure = error => ({ type: 'PROJECT_GET_FAILURE', error });
export const getProjectSuccess = json => ({ type: 'PROJECT_GET_SUCCESS', json });
export const getProjectsListFailure = error => ({ type: 'PROJECT_GET_LIST_FAILURE', error });
export const getProjectsListSuccess = json => ({ type: 'PROJECT_GET_LIST_SUCCESS', json });
export const getProfileProjectsFailure = error => ({ type: 'PROJECT_GET_PROFILE_LIST_FAILURE', error });
export const getProfileProjectsSuccessCreator = json => ({ type: 'PROJECT_GET_PROFILE_LIST_SUCCESS_CREATOR', json });
export const getProfileProjectsSuccessMember = json => ({ type: 'PROJECT_GET_PROFILE_LIST_SUCCESS_MEMBER', json });


export function createNewProject(projectData) {
  return async(dispatch) => {
      // clear the error box if it's displayed
      dispatch(clearError());
      //turn on spinner
      dispatch(incrementProgress());
  
      // contact the API
      await fetch(
      // where to contact
      '/api/projects', 
      // what to send
      {
        method: 'POST',
        body: JSON.stringify(projectData),
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
    .then((json) => {
      if (json) {
        dispatch(createProjectSuccess(json));
      } else {
        dispatch(createProjectFailure(new Error('Failed To Create Project')));
      }
    })
    .catch((error) => {
      dispatch(createProjectFailure(new Error(error)));
    });
    // turn off spinner
    dispatch(decrementProgress());
  }
}

export function getProject(projectId) {
  return async(dispatch) => {
    // clear the error box if it's displayed
    dispatch(clearError());
    //turn on spinner
    dispatch(incrementProgress());

    // contact the API
    await fetch(
      // where to contact
      `/api/projects/${projectId}`, 
      // what to send
      {
        method: 'GET',
        credentials: 'same-origin',
      },
    )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return null;
    })
    .then((json) => {
      if (json) {
        dispatch(getProjectSuccess(json));
      } else {
        dispatch(getProjectFailure(new Error('Failed To Retrieve Project Information')));
      }
    })
    .catch((error) => {
      dispatch(getProjectFailure(new Error(error)));
    });
    // turn off spinner
    dispatch(decrementProgress());
  }
}

export function deleteProject(projectId) {
  return async(dispatch) => {
    // clear the error box if it's displayed
    dispatch(clearError());
    //turn on spinner
    dispatch(incrementProgress());

    // contact the API
    await fetch(
      // where to contact
      `/api/projects/${projectId}`, 
      // what to send
      {
        method: 'DELETE',
        credentials: 'same-origin',
      },
    )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return null;
    })
    .then((json) => {
      if (json) {
        dispatch(deleteProjectSuccess(json));
      } else {
        dispatch(deleteProjectFailure(new Error('Failed To Create Project')));
      }
    })
    .catch((error) => {
      dispatch(deleteProjectFailure(new Error(error)));
    });
    // turn off spinner
    dispatch(decrementProgress());
  }
}

export function getProfileProjects(userId, role) {
  return async(dispatch) => {
    // clear the error box if it's displayed
    dispatch(clearError());
    //turn on spinner
    dispatch(incrementProgress());

    let uriString = `/api/projects/${role}/${userId}`;

    // contact the API
    await fetch(
      // where to contact
      uriString, 
      // what to send
      {
        method: 'GET',
        credentials: 'same-origin',
      },
    )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return null;
    })
    .then((json) => {
      if (json) {
        if (json[0].creator === userId) {
          dispatch(getProfileProjectsSuccessCreator(json))
        } else {
          dispatch(getProfileProjectsSuccessMember(json));
        }
      } else {
        dispatch(getProfileProjectsFailure(new Error('Failed To Retrieve Project Information')));
      }
    })
    .catch((error) => {
      dispatch(getProfileProjectsFailure(new Error(error)));
    });
    // turn off spinner
    dispatch(decrementProgress());
  }
}