import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewDetailsComponent } from '../../src/app/view-details/view-details.component'

const routes: Routes = [

  { 
    path: 'login',
    component: LoginComponent,
  },
  { 
    path: 'Register',
    component: RegisterComponent,
  },
  { 
    path: 'viewDetails',
    component: ViewDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
