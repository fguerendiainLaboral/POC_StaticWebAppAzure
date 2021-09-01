import { createAction, props } from '@ngrx/store';
import { CostumerStateModel } from './costumer.state.model';

export const INIT = createAction('[Costumer] Init', props<{ costumerState: CostumerStateModel }>());
export const CLEAR = createAction('[Costumer] Clear');
