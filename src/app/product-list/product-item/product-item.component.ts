import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { MessengerService } from 'src/app/messenger.service';
import { Products } from 'src/app/modals/products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

@Input() productItem:Products;
@Input() searchedterm:'';

  constructor(private messenger:MessengerService,private cart:CartService,private router: Router) { }

  ngOnInit() {
   console.log("productitemid",this.productItem.id)
  }

  addToCart(){
    this.cart.addProductTocart(this.productItem).subscribe(()=>{
      this.messenger.sendMsg(this.productItem);
    })
  }

 public viewDetails(){
 
    this.router.navigateByUrl("/viewdetails"+"/"+this.productItem.id);
  
  
  }
}
