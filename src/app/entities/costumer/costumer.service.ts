import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { CostumersServiceMessages } from '../../shared/messages';
import * as mockData from '../../shared/servicesJsonMockData';
import { CostumerStateModel } from "./costumerState/costumer.state.model";
import { Store } from "@ngrx/store";
import * as fromCostumerActions from './costumerState/costumer.state.action'

@Injectable({providedIn: 'root'})
export class CostumerService {

    constructor(
        private http: HttpClient,
        private store: Store
        ){};

    async getCostumers(): Promise<CostumerStateModel>{
        try{
          const path = environment.BASE_API + '/clientes';
          //const wrapper: CostumerStateModel = await this.http.get<CostumerStateModel>(path).toPromise();

          const wrapper: CostumerStateModel = mockData.COSTUMERS;
          console.log(path)
          this.store.dispatch(fromCostumerActions.INIT({costumerState : wrapper}));

          return wrapper;
        }catch (error){
          throw new Error(CostumersServiceMessages.ErrorgetCostumers);
        }
      }
        
}