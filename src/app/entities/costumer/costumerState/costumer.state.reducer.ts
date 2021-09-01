import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from './costumer.state.action';
import { CostumerStateModel } from './costumer.state.model';
 
export const initialState: CostumerStateModel = []
 
const _costumerStateReducer = createReducer(
  initialState,
  on(fromActions.INIT, (state, {costumerState}) =>  state = costumerState),
  on(fromActions.CLEAR, (state) => state = initialState)
);
 
export function costumerStateReducer(state: CostumerStateModel | undefined, action: Action) {
  return _costumerStateReducer(state, action);
}