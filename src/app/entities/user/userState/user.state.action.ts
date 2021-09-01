import { createAction, props } from '@ngrx/store';
import { UserStateModel } from './user.state.model';

export const INIT = createAction('[User] Init', props<{ userState: UserStateModel}>());
export const CLEAR = createAction('[User] Clear');
