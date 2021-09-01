import { createAction, props } from '@ngrx/store';
import { Product, ProductPrice, ProductStateModel } from './product.state.model';

export const INIT = createAction('[Product] Init', props<{ productState: ProductStateModel}>());
export const SET_PRODUCT_LIST = createAction('[Product] Set product list', props<{ products: Product[]}>());
export const SET_PRODUCT_ABM = createAction('[Product] Set productABM', props<{ product: Product}>());

export const SET_PRODUCT_ABM_NEW = createAction('[Product] Set productABM new');

export const SET_PRODUCT_ABM_productId = createAction('[Product] Set productABM_productId', props<{ productId: string}>());
export const SET_PRODUCT_ABM_name = createAction('[Product] Set productABM_name', props<{ name: string}>());
export const SET_PRODUCT_ABM_type = createAction('[Product] Set productABM_type', props<{ typeValue: string}>());
export const SET_PRODUCT_ABM_brand = createAction('[Product] Set productABM_brand', props<{ brand: string}>());
export const SET_PRODUCT_ABM_heading = createAction('[Product] Set productABM_heading', props<{ heading: string}>());
export const SET_PRODUCT_ABM_description = createAction('[Product] Set productABM_description', props<{ description: string}>());
export const SET_PRODUCT_ABM_new = createAction('[Product] Set productABM_new', props<{ newItem: boolean}>());
export const SET_PRODUCT_ABM_measure = createAction('[Product] Set productABM_measure', props<{ measure: string}>());
export const SET_PRODUCT_ABM_unitsPerPack = createAction('[Product] Set productABM_unitsPerPack', props<{ unitsPerPack: number}>());
export const SET_PRODUCT_ABM_price = createAction('[Product] Set productABM_price', props<{ price: ProductPrice}>());
export const CLEAR_PRODUCT_ABM = createAction('[Product] Clear productABM');
export const CLEAR = createAction('[Product] Clear');
