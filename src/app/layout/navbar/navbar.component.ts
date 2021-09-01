import { Component, OnInit} from '@angular/core';
import * as fromUserSelector from '../../entities/user/userState/user.state.selector'
import { select, Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import copy from 'fast-copy';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.pipe(select(fromUserSelector.getUserMenu)).subscribe((menu: MenuItem[]) =>{
      this.menuItems = copy(menu);
    });
  }
}
