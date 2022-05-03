import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Products } from '../modals/products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private product: ProductService, private cart: CartService) { }
  searchedterm:string= '';
  ProductList: Products[] = [];

  ngOnInit(): void {
    this.product.getProducts().subscribe((Products) => {
      this.ProductList = Products;
    });
    console.log(this.product.getProducts());
    this.cart.search.subscribe(val => {
      this.searchedterm = val;
    })
  }


}
