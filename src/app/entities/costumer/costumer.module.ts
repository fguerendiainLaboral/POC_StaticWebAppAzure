import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { costumerStateReducer } from './costumerState/costumer.state.reducer';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('costumers', costumerStateReducer)
  ]
})
export class CostumerModule { }
