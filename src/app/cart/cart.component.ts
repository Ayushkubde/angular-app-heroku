import { Component, IterableDiffers, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MessengerService } from 'src/app/messenger.service';
import { Products } from 'src/app/modals/products';
import { CartService } from '../cart.service';
import { CartItem } from '../modals/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {



  // {id:1,productId:1,productName:'Test 1',qty:4,price:100}
  // {id:2,productId:2,productName:'Test 2',qty:1,price:400},
  //   {id:3,productId:3,productName:'Test 3',qty:6,price:500},
  // {id:4,productId:4,productName:'Test 4',qty:2,price:100}

cartItems=[];
  cartTotal = 0;
  index=1
  constructor(private messenger: MessengerService, private cart: CartService) { }

  ngOnInit() {
    this.handlesubscription();
    this.loadCartItems();
    console.log("this.cartItems",this.cartItems);
  }
  handlesubscription() {
    // we use subscribe here beacuse whenever some event will happen this event will call by its own
    this.messenger.getMsg().subscribe((product: Products) => {
      this.loadCartItems();
    })

  }

  loadCartItems() {
    this.cart.getCartItem().subscribe((items: CartItem[]) => {
     this.cartItems=items;
     this.calcCartTotal();

    })

  }
  // public addProductToCart(product: Products) {


  //   let productexist = false;
  //   for (let i in this.cartItems) {
  //     if (this.cartItems[i].productId === product.id) {
  //       this.cartItems[i].qty++
  //       productexist = true
  //     }
  //   }
  //   if (!productexist) {
  //     this.cartItems.push({
  //       productId: product.id,
  //       productName: product.name,
  //       qty: 1,
  //       price: product.price
  //     })
  //   }

  //   this.calcCartTotal();
  // }

  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price);
    })
  }

   discardCardItem(id){
    
    this.cart.removeCartItem(id).subscribe(()=> {
     console.log("successful");
     this.loadCartItems();
    });
  
    
  }
}
