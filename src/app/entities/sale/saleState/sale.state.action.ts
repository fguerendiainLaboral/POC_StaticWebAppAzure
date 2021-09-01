import { createAction, props } from '@ngrx/store';
import { Costumer } from '../../costumer/costumerState/costumer.state.model';
import { SaleStateModel } from './sale.state.model';

export const INIT = createAction('[Sale] Init', props<{ saleState: SaleStateModel}>());
export const SET_ORDER_COSTUMER = createAction('[Sale] Set Order Costumer', props<{ orderCostumer: Costumer | null}>());
export const CLEAR_ORDER = createAction('[Sale] Clear Order');
export const CLEAR = createAction('[Sale] Clear');
