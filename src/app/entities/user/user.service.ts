import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { UserServiceMessages } from '../../shared/messages';
import * as mockData from '../../shared/servicesJsonMockData';
import { UserStateModel } from "./userState/user.state.model";
import * as fromUserAction from "./userState/user.state.action";
import { Store } from "@ngrx/store";

@Injectable({providedIn: 'root'})
export class UserService {

    constructor(
        private http: HttpClient,
        private store: Store
        ){};

    async getUser(): Promise<UserStateModel>{
        try{
          const path = environment.BASE_API + '/usuario';
          //const wrapper: UserStateModel = await this.http.get<UserStateModel>(path).toPromise();

          const wrapper: UserStateModel = mockData.USER1;
          console.log(path)
          this.store.dispatch(fromUserAction.INIT({userState: wrapper}));

          return wrapper;
        }catch (error){
          throw new Error(UserServiceMessages.ErrorgetUser);
        }
      }
        
}