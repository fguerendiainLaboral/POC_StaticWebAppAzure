import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Costumer } from '../../costumer/costumerState/costumer.state.model';
import { Product } from '../../product/productState/product.state.model';
import { SaleStateModel } from './sale.state.model';

export const getState = createFeatureSelector<SaleStateModel>('sale');


export const getSaleOrder = createSelector(
    getState, 
    (state: SaleStateModel): Product[] | null => {
        return state.lastOrder;
    });

export const getSaleLastOrder = createSelector(
    getState, 
    (state: SaleStateModel): Product[] | null => {
        return state.lastOrder;
    });

export const getSaleProductPrice = (productIdParam: string, amountParam: number) => createSelector(
    getState, 
    (state: SaleStateModel): number | null => {
        let result: number  | null = null;
        state.order?.forEach(product =>{
            if(product.productId === productIdParam){
                product.price?.forEach(item => {
                    if(item.quantity !== null && item.quantity > amountParam){
                        result = item.price
                    }
                });
            }
        })
    return result;
  });

  export const getSaleOrderCostumer = createSelector(
    getState, 
    (state: SaleStateModel): Costumer | null => {
        return state.costumer;
    });
