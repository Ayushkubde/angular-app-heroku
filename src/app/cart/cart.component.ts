import { Component, IterableDiffers, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MessengerService } from 'src/app/messenger.service';
import { Products } from 'src/app/modals/products';
import { CartService } from '../cart.service';
import { CartItem } from '../modals/cart-item';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = [];
  cartTotal = 0;
  handler: any = null;
  index = 1
  constructor(private messenger: MessengerService, private cart: CartService) { }

  ngOnInit() {
    this.handlesubscription();
    this.loadCartItems();
    console.log("this.cartItems", this.cartItems);
    this.loadStripe();
  }
  handlesubscription() {
    // we use subscribe here beacuse whenever some event will happen this event will call by its own
    this.messenger.getMsg().subscribe((product: Products) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cart.getCartItem().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }


  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price);
    })
  }

  discardCardItem(id) {
    this.cart.removeCartItem(id).subscribe(() => {
      console.log("successful");
      this.loadCartItems();
    });
  }

  pay(amount) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51KvbYvSF4CokfeHp4ocgGIM4c7QrOrg0Ox2eUakDJdAEsYL6GJzO3VspDfqCQvvCDqHkM5sQQpF5P9owhAtrrM8700rCfZKuBL',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        Swal.fire('Thank you...', 'You Payment succesfully Done!', 'success')
      }
    });

    handler.open({
      name: 'Shopping cart',
      description: '2 widgets',
      amount:amount * 100
    });

  }
  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51KvbYvSF4CokfeHp4ocgGIM4c7QrOrg0Ox2eUakDJdAEsYL6GJzO3VspDfqCQvvCDqHkM5sQQpF5P9owhAtrrM8700rCfZKuBL',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
      window.document.body.appendChild(s);
    }
  }
}
