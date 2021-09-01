import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from './sale.state.action';
import { SaleStateModel } from './sale.state.model';
 
export const initialState: SaleStateModel ={
    amount: null,
    costumer: null,
    deliveryDate: null,
    lastOrder: null,
    order: null
};
 
const _saleStateReducer = createReducer(
  initialState,
  on(fromActions.INIT, (state, {saleState}) =>  state = saleState),
  on(fromActions.SET_ORDER_COSTUMER, (state, {orderCostumer}) => state = {...state, costumer: orderCostumer}),
  on(fromActions.CLEAR_ORDER, (state) => state = {...state, order: initialState.order}),
  on(fromActions.CLEAR, (state) => state = initialState)
);
 
export function saleStateReducer(state: SaleStateModel | undefined, action: Action) {
  return _saleStateReducer(state, action);
}