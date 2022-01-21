import axios from 'axios';

import ProjectActionTypes from './ProjectTypes';

/**
 * Proejct is the object passed from the Submit Form.
 */
export const createProject = (project) => async (dispatch) => {
  try {
    await axios.post('http://localhost:8080/api/project', project);
  } catch (e) {
    dispatch({
      type: ProjectActionTypes.GET_ERRORS,
      payload: 'Error: Adding Project failed',
    });
  }
};
