import {CreateCustomerComponent} from './create-customer/create-customer.component';
import { CreateUserComponent } from './create-user/create-user.component';
import {CustomersComponent} from './customers/customers.component';
import {SearchCustomersComponent} from './search-customers/search-customers.component';
import { UsersComponent } from './users/users.component';

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'customer', pathMatch: 'full'},
  {path: 'customer', component: CustomersComponent},
  {path: 'add', component: CreateCustomerComponent},
  {path: 'findbylastname', component: SearchCustomersComponent},
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {path: 'user', component: UsersComponent},
  {path: 'adduser', component: CreateUserComponent},
  {path: '', redirectTo: 'employee', pathMatch: 'full'},
  {path: 'employee', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
