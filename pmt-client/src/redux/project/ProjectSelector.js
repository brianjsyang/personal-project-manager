import { createSelector } from 'reselect';

const selectProject = (state) => state.project;

export const selectProjectError = createSelector(
  [selectProject],
  (project) => project.error
);

export const selectProjectStatus = createSelector(
  [selectProject],
  (project) => project.status
);
