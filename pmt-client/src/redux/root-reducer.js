import { combineReducers } from 'redux';
import projectReducer from './project/ProjectReducer';

export default combineReducers({
  project: projectReducer,
});
