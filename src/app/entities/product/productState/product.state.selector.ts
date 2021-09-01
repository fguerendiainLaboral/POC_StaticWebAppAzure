import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Product, ProductStateModel } from './product.state.model';

export const getState = createFeatureSelector<ProductStateModel>('product');


export const getProducts = createSelector(
    getState, 
    (state: ProductStateModel): ProductStateModel | null => {
        return state;
    });



export const getProduct = (productId: string | null | undefined) => createSelector(
    getState, 
    (state: ProductStateModel): Product | null => {
        let result: Product | null = null;
        if(productId){
            state.products.forEach((product: Product) =>{
                if(product.productId === productId){
                    result = product;
                }
            })
        }
        return result;
    });


export const getProductsABM = createSelector(
    getState, 
    (state: ProductStateModel): Product | null => {
        return state.productABM;
    });
