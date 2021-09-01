import { Component } from '@angular/core';
import { ProductService } from './entities/product/product.service';
import { UserService } from './entities/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cepaFront';

  constructor(
    private userService: UserService
    ){
    }

    ngOnInit(): void {
      this.userService.getUser();
    }
}
