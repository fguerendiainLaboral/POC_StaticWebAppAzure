import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product, ProductStateModel } from 'src/app/entities/product/productState/product.state.model';
import * as constants from '../../../../shared/constants';
import * as fromProductSelects from '../../../../entities/product/productState/product.state.selector';
import * as fromProductActions from '../../../../entities/product/productState/product.state.action';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {

  _suscriptionsPool: Subject<any> = new Subject<any>();

  formState$: Observable<Product>;

  lblProductId: string = constants.Product_form_lbl_product_Id;
  lblBrand: string = constants.Product_form_lbl_brand; 
  lblDescription: string = constants.Product_form_lbl_description;
  lblHeading: string = constants.Product_form_lbl_heading;
  lblName: string = constants.Product_form_lbl_name;
  lblMeasure: string = constants.Product_form_lbl_measure;
  lblUnitsPerPack: string = constants.Product_form_lbl_unitsPerPack;
  lblType: string = constants.Product_form_lbl_type;
  lblCurrency: string = constants.Product_form_lbl_currency;
  lblPrice: string = constants.Product_form_lbl_price;
  lblQuantity: string = constants.Product_form_lbl_quantity;

  constructor(private store: Store<ProductStateModel>) {
  }

  ngOnInit(): void {
    this.formState$ = this.getProductABM();

  }

  ngOnDestroy(): void {
    this._suscriptionsPool.next();
    this._suscriptionsPool.unsubscribe();
  }

  getProductABM(): Observable<Product>{
    return this.store.pipe(
      select(fromProductSelects.getProductsABM),
      takeUntil(this._suscriptionsPool));
  }


  setValue(itemName: string, valueStr?: string){
    switch(itemName){
      case 'productId' : { this.store.dispatch(fromProductActions.SET_PRODUCT_ABM_productId({ productId: valueStr })); break;}
      case 'name' : { this.store.dispatch(fromProductActions.SET_PRODUCT_ABM_name({ name: valueStr })); break;}
      case 'type' : { this.store.dispatch(fromProductActions.SET_PRODUCT_ABM_type({ typeValue: valueStr })); break;}
      case 'brand' : { this.store.dispatch(fromProductActions.SET_PRODUCT_ABM_brand({ brand: valueStr })); break;}
      case 'heading' : { this.store.dispatch(fromProductActions.SET_PRODUCT_ABM_heading({ heading: valueStr })); break;}
      case 'description' : { this.store.dispatch(fromProductActions.SET_PRODUCT_ABM_description({ description: valueStr })); break;}
      case 'measure' : { this.store.dispatch(fromProductActions.SET_PRODUCT_ABM_measure({ measure: valueStr })); break;}
      case 'unitsPerPack' : { this.store.dispatch(fromProductActions.SET_PRODUCT_ABM_unitsPerPack({ unitsPerPack: Number(valueStr) })); break;}
    }
  }
}