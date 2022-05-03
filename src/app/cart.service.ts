import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CartItem } from './modals/cart-item';
import { HttpClient } from '@angular/common/http';
import { Products } from './modals/products';
import { cartUrl } from 'src/config/config';
import { BehaviorSubject, Observable } from 'rxjs';
const apiurl="http://localhost:3000/carts";
@Injectable({
  providedIn: 'root'
})
export class CartService {
public search=new BehaviorSubject<string>("");


  constructor(private http:HttpClient) { }

  getCartItem():Observable<CartItem[]>{
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result:any[])=>{
      let cartItems:CartItem[]=[];
      for(let item of result){
        let productexist=false;

        for(let i in cartItems){
          if(cartItems[i].productId==item.productId){
            cartItems[i].qty++
            productexist=true
            break;
          }
        }

        if(!productexist){
          cartItems.push(new CartItem(item.id,item.product))
        }
      }
      return cartItems;
      })
    );
  }

  addProductTocart(product:Products):Observable<any>{
    return this.http.post(cartUrl,{product});
  }

  removeCartItem(id:string):Observable<any>{
    return  this.http.delete<any>(cartUrl + "/"+id);
    
  }
}
