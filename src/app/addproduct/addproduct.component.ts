import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { poductsUrl } from 'src/config/config';
import { Products } from '../modals/products';
import { ProductService } from '../product.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  errorMessage: any;

  constructor(private product: ProductService, private http: HttpClient) { }

  public id: number;
  public name: string;
  public description: string;
  public price: number;
  public imageUrl: string;
  ngOnInit() {

  }

  public AddProduct() {
    const body = { id: this.id, name: this.name, description: this.description, price: this.price, imageUrl: this.imageUrl }
    this.http.post<any>(poductsUrl, body).subscribe({
      next: data => {
        console.log("sucess");
        Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
        this.resetForm();
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
     
      }
    })
  }
  resetForm() {
    this.id = null;
    this.imageUrl = "";
    this.description = "";
    this.price = null;
    this.name = "";

  }
}
