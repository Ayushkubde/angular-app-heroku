import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ProductService } from '../product.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];
  errorMessage: any;

  constructor(private http: HttpClient, private product: ProductService) { }

  public firstname = '';
  public lastname = '';
  public Address = '';
  public email = '';
  public password = '';

  ngOnInit() {
    //this.Register();
  }

  public registerUser() {
    const body = { firstname: this.firstname, lastname: this.lastname, Address: this.Address, email: this.email, password: this.password };
    return this.product.registeruser(body).subscribe({
      next: data => {
        localStorage.setItem('RegisterUser', JSON.stringify(body));
        Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
        this.resetForm();
        console.log("suceess");
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error)
      }
    });

  }


  public resetForm() {
    this.firstname = "";
    this.firstname = "";
    this.Address = "";
    this.email = "";
    this.password = "";
  }
}
