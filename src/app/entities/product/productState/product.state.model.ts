import { FormGroupState } from "ngrx-forms";

export interface ProductPrice {
    price: number | null;
    currency: string | null;
    quantity: number | null;
}
export interface ProductUnit {
    measure: string | null;
    unitsPerPack: number | null;
}

export interface Product {
    productId?: string | null;
    name?: string | null;
    type?: string | null;
    brand?: string | null;
    heading?: string | null; //rubro
    description?: string | null;
    package?: ProductUnit | null;
    price?: ProductPrice[];
    new?:boolean | null;
}

export interface ProductStateModel {
    products: Product[];
    productABM?: Product;
}