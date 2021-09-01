import { Injectable } from "@angular/core";
import { Product } from "./productState/product.state.model";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { ProductServiceMessages } from '../../shared/messages';
import * as mockData from '../../shared/servicesJsonMockData';
import * as fromProductAction from './productState/product.state.action';
import { Store } from "@ngrx/store";
import copy from "fast-copy";

@Injectable({providedIn: 'root'})
export class ProductService {

    constructor(
        private http: HttpClient,
        private store: Store
        ){};

    async getProducts(): Promise<Product[]>{
        try{
          const path = environment.BASE_API + '/productos';
          //const wrapper: ProductStateModel = await this.http.get<ProductStateModel>(path).toPromise();

          const wrapper: Product[] = mockData.PRODUCTS.products;
          console.log(path)
          this.store.dispatch(fromProductAction.SET_PRODUCT_LIST({products: wrapper}));

          return wrapper;
        }catch (error){
          throw new Error(ProductServiceMessages.ErrorGetProducts);
        }
      }

      async addProduct(product: Product): Promise<Product[]>{
        try{
          const path = environment.BASE_API + '/productos';
          //const wrapper: Product[] = await this.http.post<Product[]>(path).toPromise();

          //MOCK_RESPONSE
          console.log(product)
          let aux = copy(product);
          aux.productId = '123456';
          let wrapper: Product[] = copy(mockData.PRODUCTS.products);
          wrapper.push(aux);
          console.log('SE AGREGO EL PRODUCTO: ', aux);
          //-----

          this.store.dispatch(fromProductAction.SET_PRODUCT_LIST({products: wrapper}));
          return wrapper;
        }catch (error){
          throw new Error(ProductServiceMessages.ErrorGetProducts);
        }
      }

      async editProduct(product: Product): Promise<Product[]>{
        try{
          const path = environment.BASE_API + '/productos';
          //const wrapper: Product[] = await this.http.put<Product[]>(path).toPromise();

          //MOCK_RESPONSE
          let wrapper: Product[] = copy(mockData.PRODUCTS.products);
          wrapper.push(product);
          console.log('SE EDITO EL PRODUCTO: ', product);
          //-----

          this.store.dispatch(fromProductAction.SET_PRODUCT_LIST({products: wrapper}));
          return wrapper;
        }catch (error){
          throw new Error(ProductServiceMessages.ErrorGetProducts);
        }
      }
      




}