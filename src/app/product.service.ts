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
  public apiurl = "http://localhost:3000/Register";
  public logindetailsurl="http://localhost:3000/login";
  getProducts():Observable<Products[]>{
    //calling an api from products array
    return this.http.get<Products[]>(poductsUrl);
  }

  getProductDetails(productID:number):Observable<Products[]>{
    //calling an api from products array
    return this.http.get<any>(poductsUrl+"/"+productID);
  }

  registeruser(body:any){
    return this.http.post<any>(this.apiurl,body);
  }
  
  // addproduct(product:Products):Observable<any>{
  //   return this.http.post(poductsUrl,{product});
  // }

  logindetails(body:any){
    return this.http.post<any>(this.logindetailsurl,body);
  }
}
