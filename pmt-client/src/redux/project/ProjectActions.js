import axios from 'axios';
import ProjectActionTypes from './ProjectTypes';

/**
 * Proejct is the object passed from the Submit Form.
 */
export const createProject = (project) => async (dispatch) => {
  try {
    await axios
      .post('http://localhost:8080/api/project', project)
      .then((res) => {
        dispatch({
          type: ProjectActionTypes.CREATE_PROJECT,
          payload: res,
        });
      });
  } catch (e) {
    dispatch({
      type: ProjectActionTypes.GET_ERRORS,
      payload: e.response,
    });
  }
};

/**
 * Get All Projects
 */
export const getAllProjects = () => async (dispatch) => {
  try {
    await axios.get('http://localhost:8080/api/project/all').then((res) => {
      dispatch({
        type: ProjectActionTypes.GET_ALL_PROJECTS,
        payload: res.data,
      });
    });
  } catch (e) {
    dispatch({
      type: ProjectActionTypes.GET_ERRORS,
      payload: e.response,
    });
  }
};

/**
 * Reset Status
 */
export const resetStatus = () => ({
  type: ProjectActionTypes.RESET_STATUS,
  payload: '',
});
