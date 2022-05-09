import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule }   from "@angular/material/icon";
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatGridListModule} from '@angular/material/grid-list';
import { CartComponent } from './cart/cart.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import{MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';

import { FilterPipe } from './filter.pipe';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { BaseComponent } from './base/base.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    FiltersComponent,
    ProductListComponent,
    ShoppingComponent,
    CartItemComponent,
    ProductItemComponent,
    ModalComponent,
    ViewDetailsComponent,
    FilterPipe,
    BaseComponent,
    AddproductComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,       
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule ,
    MatInputModule  ,
    MatButtonModule,
    MatSelectModule ,
    MatGridListModule,
    MatDialogModule,
    Ng2SearchPipeModule,
    HttpClientModule  
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})

export class AppModule { }
