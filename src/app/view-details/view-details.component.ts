import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../modals/products';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  @Input() productItem:Products;
  constructor() { }

  ngOnInit() {
    console.log("productitem",this.productItem);
  }


  

}
