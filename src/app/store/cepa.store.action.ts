import { createAction, props } from '@ngrx/store';
import { CepaStateModel } from './cepa.store.model';

export const INIT = createAction('[CEPA ROOT] Init', props<{ storeValue: CepaStateModel }>());
export const CLEAR = createAction('[CEPA ROOT] Clear');
