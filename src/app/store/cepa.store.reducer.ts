import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from './cepa.store.action';
import { CepaStateModel } from './cepa.store.model';
 
export const initialState: CepaStateModel = {};
 
const _cepaStoreReducer = createReducer(
  initialState,
  on(fromActions.INIT, (state, {storeValue}) => state = storeValue),
  on(fromActions.CLEAR, (state) => state = initialState)
);
 
export function cepaStoreReducer(state: CepaStateModel | undefined, action: Action) {
  return _cepaStoreReducer(state, action);
}