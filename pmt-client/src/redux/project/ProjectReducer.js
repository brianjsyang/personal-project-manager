import ProjectActionTypes from './ProjectTypes';

const INITIAL_STATE = {
  projects: [],
  error: '',
  status: '',
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectActionTypes.GET_ERRORS:
      return {
        error: action.payload.data,
        status: action.payload.status,
      };

    case ProjectActionTypes.CREATE_PROJECT:
      return {
        error: '',
        status: action.payload.status,
      };

    case ProjectActionTypes.GET_ALL_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };

    case ProjectActionTypes.RESET_STATUS:
      return {
        error: '',
        status: '',
      };

    default:
      return state;
  }
};

export default projectReducer;
