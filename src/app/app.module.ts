import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { cepaStoreReducer } from './store/cepa.store.reducer'
import { NgrxFormsModule } from 'ngrx-forms';

import { environment } from 'src/environments/environment';
import { NotFoundComponent } from './pages/not-found/not-found.component';


import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BodyComponent } from './layout/body/body.component';

import { UserModule } from './entities/user/user.module';
import { CostumerModule } from './entities/costumer/costumer.module';
import { ProductModule } from './entities/product/product.module';

//pages
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductAdminComponent } from './pages/product/product-admin/product-admin.component';
import { ProductFormComponent } from './pages/product/product-admin/product-form/product-form.component';


//primeNg ------------------
import { PanelMenuModule} from 'primeng/panelmenu';
import { CardModule} from 'primeng/card';
import { ButtonModule} from 'primeng/button';
import { SaleModule } from './entities/sale/sale.module';
import { SaleComponent } from './pages/sale/sale.component';
import { DropdownModule } from 'primeng/dropdown';
import { CostumerInfoComponent } from './pages/sale/costumer-info/costumer-info.component';
import { DialogModule } from 'primeng/dialog';


//customPipes ---------------------
import { CuitFormatterPipe } from './shared/dataPipes';
import { DniFormatterPipe } from './shared/dataPipes';
import { PhoneFormatterPipe } from './shared/dataPipes';
import { OrderComponent } from './pages/sale/order/order.component';
import { ModalMessageComponent } from './shared/modal-message/modal-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    SaleComponent,
    CostumerInfoComponent,
    ProductAdminComponent,
    ProductFormComponent,
    ModalMessageComponent,


    CuitFormatterPipe,
    DniFormatterPipe,
    PhoneFormatterPipe,
    OrderComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,      
    HttpClientModule,

    PanelMenuModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    DialogModule,

    UserModule,
    CostumerModule,
    ProductModule,
    SaleModule,
   
    NgrxFormsModule,
    StoreModule.forRoot(
      { cepaState: cepaStoreReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      name: 'CEPA-STORE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
