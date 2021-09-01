import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Costumer } from 'src/app/entities/costumer/costumerState/costumer.state.model';
import * as fromSaleSelect from '../../../entities/sale/saleState/sale.state.slector';
import * as constants from '../../../shared/constants';


@Component({
  selector: 'app-costumer-info',
  templateUrl: './costumer-info.component.html',
  styleUrls: ['./costumer-info.component.scss']
})
export class CostumerInfoComponent implements OnInit {

  costumer: Costumer | null = null;

  lblCostumerId: string = constants.Costumer_info_lbl_costumer_Id;
  lblCostumerName: string = constants.Costumer_info_lbl_costumer_name;
  lblCostumerBusinessName: string = constants.Costumer_info_lbl_costumer_businessName;
  lblCostumerDni: string = constants.Costumer_info_lbl_costumer_dni;
  lblCostumerCuit: string = constants.Costumer_info_lbl_costumer_cuit;
  lblEmail: string = constants.Costumer_info_lbl_costumer_email;
  lblPhone: string = constants.Costumer_info_lbl_costumer_phone;


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.pipe(select(fromSaleSelect.getSaleOrderCostumer)).subscribe(orderCostumer => this.costumer = orderCostumer);
  }




}
