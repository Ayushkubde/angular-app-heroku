import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { ProductService } from '../product.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  public Email: string;
  public Password: string;
  errorMessage: any;
  constructor(private router: Router, private http: HttpClient, private Product: ProductService) { }

  ngOnInit() {

    this.resetform();
  }

  public RegisterProduct() {
    this.router.navigateByUrl("Register");
  }

  public insertData() {
    const body = { Email: this.Email, Password: this.Password };
    
    this.Product.logindetails(body).subscribe({
      next: data => {
        localStorage.setItem('currentUser', JSON.stringify(body));
        console.log("suceess");
        this.resetform();
        Swal.fire('Thank you...', 'You Logged In succesfully!', 'success')

      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    })
  }

  resetform() {
    this.Email = "";
    this.Password = "";
  }
}


