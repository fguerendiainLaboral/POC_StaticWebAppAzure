import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from './user.state.action';
import { UserStateModel } from './user.state.model';
 
export const initialState: UserStateModel ={
    userId: null,
    lastName: null,
    surName: null,
    email: null,
    active: null,
    token: null,
    menu: []
};
 
const _userStateReducer = createReducer(
  initialState,
  on(fromActions.INIT, (state, {userState}) =>  state = userState),
  on(fromActions.CLEAR, (state) => state = initialState)
);
 
export function userStateReducer(state: UserStateModel | undefined, action: Action) {
  return _userStateReducer(state, action);
}