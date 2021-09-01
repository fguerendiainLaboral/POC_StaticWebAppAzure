import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromUserSelector from '../../entities/user/userState/user.state.selector';
import * as constants from '../../shared/constants';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  welcomeMsg: string = constants.Home_leyend_welcome;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.pipe(select(fromUserSelector.getUserName)).subscribe(user => {
      this.welcomeMsg += ' ' + user;
    })

  }

}
