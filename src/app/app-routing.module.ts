import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewDetailsComponent } from '../../src/app/view-details/view-details.component'
import { BaseComponent } from './base/base.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [
  { 
    path: '',
    component: BaseComponent,
  },
  { 
    path: 'login',
    component: LoginComponent,
  },
  { 
    path: 'Register',
    component: RegisterComponent,
  },
  { 
    path: 'viewdetails/:id',
    component: ViewDetailsComponent,
  },
  { 
    path: 'addproduct',
    component: AddproductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
