import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { saleStateReducer } from './saleState/sale.state.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('sale', saleStateReducer)
  ]
})
export class SaleModule { }
