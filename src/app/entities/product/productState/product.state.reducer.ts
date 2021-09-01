import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from './product.state.action';
import { Product, ProductStateModel } from './product.state.model';
 
const initialState: ProductStateModel = {
  products: [],
  productABM: null
};

const newProductABM: Product = {
  brand: '',
  description: '',
  heading: '',
  name: '',
  new: true,
  package: {
    measure: '',
    unitsPerPack: 0
  },
  price: [],
  productId: '',
  type: '',
}

const _productStateReducer = createReducer(
  initialState,
  on(fromActions.INIT, (state, {productState}) =>  state = productState),
  on(fromActions.SET_PRODUCT_LIST, (state, {products}) => state = {...state, products: products}),
  on(fromActions.SET_PRODUCT_ABM, (state, {product}) => state = {...state, productABM: product}),

  on(fromActions.SET_PRODUCT_ABM_NEW, (state) => state = {...state, productABM: newProductABM}),

  on(fromActions.SET_PRODUCT_ABM_productId, (state, {productId}) => state = {...state, productABM: { ...state.productABM, productId: productId}}),
  on(fromActions.SET_PRODUCT_ABM_name, (state, {name}) => state = {...state, productABM: { ...state.productABM, name: name}}),
  on(fromActions.SET_PRODUCT_ABM_type, (state, {typeValue}) => state = {...state, productABM: { ...state.productABM, type: typeValue}}),
  on(fromActions.SET_PRODUCT_ABM_brand, (state, {brand}) => state = {...state, productABM: { ...state.productABM, brand: brand}}),
  on(fromActions.SET_PRODUCT_ABM_heading, (state, {heading}) => state = {...state, productABM: { ...state.productABM, heading: heading}}),
  on(fromActions.SET_PRODUCT_ABM_description, (state, {description}) => state = {...state, productABM: { ...state.productABM, description: description}}),
  on(fromActions.SET_PRODUCT_ABM_new, (state, {newItem}) => state = {...state, productABM: { ...state.productABM, new: newItem}}),
  on(fromActions.SET_PRODUCT_ABM_measure, (state, {measure}) => state = {...state, productABM: { ...state.productABM, package: { ...state.productABM.package, measure: measure }}}),
  on(fromActions.SET_PRODUCT_ABM_unitsPerPack, (state, {unitsPerPack}) => state = {...state, productABM: { ...state.productABM, package: { ...state.productABM.package, unitsPerPack: unitsPerPack }}}),
  on(fromActions.SET_PRODUCT_ABM_price, (state, {price}) => state = {...state, productABM: { ...state.productABM, price: [ ...state.productABM.price, price]}}),

  on(fromActions.CLEAR_PRODUCT_ABM, (state) => state = {...state, productABM: initialState.productABM}),
  on(fromActions.CLEAR, (state) => state = initialState),


  );
 
export function productStateReducer(state: ProductStateModel | undefined, action: Action) {
  return _productStateReducer(state, action);
}