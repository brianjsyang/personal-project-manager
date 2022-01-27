import ProjectActionTypes from './ProjectTypes';

const INITIAL_STATE = {
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
