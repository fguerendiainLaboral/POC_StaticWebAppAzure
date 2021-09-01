import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserStateModel } from './user.state.model';

export const getState = createFeatureSelector<UserStateModel>('user');

export const getUserMenu = createSelector(getState, (state: UserStateModel) => {
  return state.menu;
});

export const getUserName = createSelector(getState, (state: UserStateModel) => {
  if(state.lastName == null || 
    state.surName == null ||
    state.lastName == '' || 
    state.surName == ''){
    return '';  
  }
  return state.surName + ' ' + state.lastName;
});
