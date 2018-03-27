import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {CustomersComponent} from './customers/customers.component';
import { UsersComponent } from './users/users.component';
import {DataService} from './data.service';
import {UserDataService} from './userdata.service';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import { CreateUserComponent } from './create-user/create-user.component';

import {enableProdMode} from '@angular/core';
import {SearchCustomersComponent} from './search-customers/search-customers.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    UserDetailsComponent,
    CustomersComponent,
    UsersComponent,
    CreateCustomerComponent,
    CreateUserComponent,
    SearchCustomersComponent,
    EmployeeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
