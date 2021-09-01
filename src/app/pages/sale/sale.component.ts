import { Component, OnInit, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CostumerStateModel, Costumer } from 'src/app/entities/costumer/costumerState/costumer.state.model';
import * as constants from '../../shared/constants';
import { DropdownDataItem } from '../../shared/shared.model';
import * as fromCostumerSelect from '../../entities/costumer/costumerState/costumer.state.selector';
import * as fromSaleAction from '../../entities/sale/saleState/sale.state.action';
import copy from 'fast-copy';
import { ReplaySubject } from 'rxjs';
import { takeUntil} from 'rxjs/operators';
import { CostumerService } from 'src/app/entities/costumer/costumer.service';


@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit, OnDestroy{

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  
  saleBtnAccept = constants.Sale_btn_accept;
  saleBtnCancel = constants.Sale_btn_cancel;

  ddwnPlaseHolder: string = constants.Sale_page_ddwn_placeholder;
  ddwnCostumerList: DropdownDataItem[] = [];
  ddwnSelectedCostumer: DropdownDataItem | undefined;

  emptyChoise: boolean = true
  confirmCostumer: boolean = false;

  costumer: Costumer | null = null;

  constructor(
    private store: Store,
    private costumerService: CostumerService) { }

  ngOnInit(): void {
    this.costumerService.getCostumers();
    this.getCostumerList();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
    this.clearSale();
  }

  getCostumerList(){
    this.store
    .pipe(takeUntil(this.destroyed$),select(fromCostumerSelect.getCostumers))
    .subscribe( costumers => {
        this.ddwnCostumerList = this.buildDropdownCostumerDataSet(copy(costumers));
        }
      )
  }

  getCostumerData(){
    console.log('ANTES', this.emptyChoise);
    this.emptyChoise = false;
    console.log('DESPUES', this.emptyChoise);
    this.store.pipe(takeUntil(this.destroyed$),select(fromCostumerSelect.getCostumer(this.ddwnSelectedCostumer?.code)))
    .subscribe( costumerData => {
      this.costumer = costumerData;
      this.setOrderCostumer();
    });
  }

  setOrderCostumer(){
    this.store.dispatch(fromSaleAction.SET_ORDER_COSTUMER({orderCostumer: this.costumer}));
  }

  clearSale(){
    this.store.dispatch(fromSaleAction.CLEAR());
  }

  clearSaleOrder(){
    this.store.dispatch(fromSaleAction.CLEAR_ORDER());
  }
  
  buildDropdownCostumerDataSet(costumerList: CostumerStateModel | null): DropdownDataItem[]{
    let dataSet: DropdownDataItem[] = [];
    if(costumerList){
      Object.values(costumerList).forEach(costumer => {

        let costumerName: string = costumer.costumerId;

        if (costumer.businessName){
          costumerName += ' - ' + costumer.businessName
        }else{
          costumerName += ' - ' +  costumer.lastName + ', ' + costumer.surName
        }

        dataSet?.push({
          name: costumerName,
          code: costumer.costumerId
        })
      })
    }
    return dataSet;
  }

  changeCostumer(value: boolean){
    if (!value) this.clearSaleOrder();
    this.confirmCostumer = value;
  }

}



/*
costumerId: string | null;
lastName: string | null;
surName: string | null;
dni: number | null ;
businessName: string | null;
cuit: number | null ;
emails: string[] | null;
phones: string[] | null;
addresses: Addresses[] | null;
activo: boolean | null;



addressId: string | null;
street: string | null;
number: string | null;
city: string | null;
province: string | null;
country: string | null;
postalCode: string | null;

*/