import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ProductService } from 'src/app/entities/product/product.service';
import { Product, ProductStateModel } from 'src/app/entities/product/productState/product.state.model';
import { DropdownDataItem } from 'src/app/shared/shared.model';
import * as constants from '../../../shared/constants'
import * as fromProductSelects from '../../../entities/product/productState/product.state.selector';
import * as fromProductActions from '../../../entities/product/productState/product.state.action';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalMessageModel } from 'src/app/shared/modal-message/modal-message.model';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss']
})
export class ProductAdminComponent implements OnInit, OnDestroy {

  ddwnPlaceHolder: string = constants.ProductAdmin_page_ddwn_placeholder;
  lblProductBtnCancel: string = constants.ProductAdmin_page_lbl_btn_cancel;
  lblProductBtnEdit: string = constants.ProductAdmin_page_lbl_btn_edit;
  lblProductBtnAdd: string = constants.ProductAdmin_page_lbl_btn_add;

  ddwProductList: DropdownDataItem[] = [];
  ddwProductSelected: DropdownDataItem | undefined;
  selectedProduct: Product | null = null;
  _suscriptionsPool: Subject<any> = new Subject<any>();
  loading: boolean;
  modalData: ModalMessageModel = {visible: false};



  constructor(
    private store: Store,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts();
    this.getProductList();
    this.getProductABM();
  }

  ngOnDestroy():void {
    this._suscriptionsPool.next();
    this._suscriptionsPool.unsubscribe();
  }

  getProductList(){
    this.store.pipe(
      select(fromProductSelects.getProducts),
      takeUntil(this._suscriptionsPool))
    .subscribe((products: ProductStateModel | null) => {
      this.ddwProductList = this.buildDropdownProductDataSet(products);
    });
  }

  getProductABM(){
    this.store.pipe(
      select(fromProductSelects.getProductsABM),
      takeUntil(this._suscriptionsPool))
      .subscribe( productABM => {
        this.selectedProduct = productABM;
      });
  }

  setProductData(){
    this.store.pipe(
      select(fromProductSelects.getProduct(this.ddwProductSelected?.code)),
      takeUntil(this._suscriptionsPool))
    .subscribe(product => {
      this.store.dispatch(fromProductActions.SET_PRODUCT_ABM({product: product}));
    })
  }




  buildDropdownProductDataSet(productList: ProductStateModel | null){
    let dataSet: DropdownDataItem[] = [];
    if(productList){
      productList.products.forEach(product => {
        let productName: string | null | undefined = product.productId
        if(product.name) productName += ' - ' + product.name;
        if(product.type) productName += ' ' + product.type;
        if(product.brand) productName += ' - ' + product.brand;
        if(product.package?.measure) productName += ' (x ' + product.package?.measure + ')';
        dataSet?.push({
          name: productName,
          code: product.productId
        })
      })
    }
    return dataSet;
  }

  newProduct(): void {
    if(this.selectedProduct === null || this.selectedProduct === undefined){
      this.store.dispatch(fromProductActions.SET_PRODUCT_ABM_NEW());
    }else{
      this.addProduct();
      
  }
  }

  addProduct(): void {
    this.productService.addProduct(this.selectedProduct)
    .then(()=>{
      this.loading = false;
      this.modalData = {
        visible: true,
        header: 'hola',
        message: 'todo bien'
      }; //armar objeto modal con datos ok
      
    })
    .catch((error)=>{
      this.loading = false;
      this.modalData = {
        visible: true,
        header: 'hola',
        message: error.message
      }; //armar objeto modal con datos ok
    });
    ;
  }

  editProduct(): void {
    this.productService.addProduct(this.selectedProduct);
  }

  cancelEditProduct(): void {
    this.store.dispatch(fromProductActions.CLEAR_PRODUCT_ABM());
    this.ddwProductSelected = undefined;
  }

}
