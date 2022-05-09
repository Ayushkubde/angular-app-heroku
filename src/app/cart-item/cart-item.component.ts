import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CartService } from '../cart.service';
import { Products } from '../modals/products';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() productItem:Products;
  @Input() cartItem:any;
  @Output() RemoveCartItemId = new EventEmitter<string>();
  constructor(private cart:CartService) { }

  ngOnInit(): void {
   console.log(this.cartItem);
  }
  
  discardCardItem(id){    
  this.RemoveCartItemId.emit(id);
  }

}
