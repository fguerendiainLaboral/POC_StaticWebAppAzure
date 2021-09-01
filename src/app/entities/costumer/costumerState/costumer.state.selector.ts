import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Costumer, CostumerStateModel } from './costumer.state.model';

export const getState = createFeatureSelector<CostumerStateModel>('costumers');


export const getCostumers = createSelector(
    getState, 
    (state: CostumerStateModel): CostumerStateModel | null => {
        return state;
    });


export const getCostumer = (costumerId: string | null | undefined) => createSelector(
    getState, 
    (state: CostumerStateModel): Costumer | null => {
        let result: Costumer | null = null;
        if(costumerId){
            Object.values(state).forEach((costumer: Costumer) =>{
                if(costumer.costumerId === costumerId){
                    result = costumer;
                }
            })
        }
        return result;
    });
    