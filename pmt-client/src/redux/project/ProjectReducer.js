import ProjectActionTypes from './ProjectTypes';

const INITIAL_STATE = {
  error: null,
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectActionTypes.GET_ERRORS:
      return action.payload;

    default:
      return state;
  }
};

export default projectReducer;
