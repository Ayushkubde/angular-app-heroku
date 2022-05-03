import { Injectable } from '@angular/core';
import { Products } from './modals/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { poductsUrl } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http :HttpClient) { }

  getProducts():Observable<Products[]>{
    //calling an api from products array
    return this.http.get<Products[]>(poductsUrl);
  }
}
