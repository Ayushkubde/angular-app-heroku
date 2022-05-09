import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Products } from '../modals/products';
import { HttpClient } from '@angular/common/http';
import { poductsUrl } from 'src/config/config';
import { ProductService } from '../product.service';
import { MessengerService } from '../messenger.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  ProductList: Products[] = [];
  productID: any;
  producteddata:Array<any>=[];
  constructor(public _router:Router, private http :HttpClient,private product: ProductService, private actRoute: ActivatedRoute,private messenger:MessengerService,private cart:CartService) { }

  ngOnInit() {
    this.productID = this.actRoute.snapshot.params['id'];
    console.log("productidjefdngjkn",this.productID)
    this.loadProductDetails(this.productID);
  }
 

  public loadProductDetails(productID:number){
    this.product.getProductDetails(productID).subscribe((Products) => {
      this.ProductList = Products;
      this.producteddata.push(this.ProductList);
      console.log("viewdetails",this.ProductList,this.productID);
    });
  //  console.log("viewdetails",this.ProductList,this.productID);
  }

}
