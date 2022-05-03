import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  changeLog: any;

  constructor(private router: Router, private cart: CartService) { }

  public searchedterm = '';
  ngOnInit(): void {
  }

  public login() {
    this.router.navigateByUrl("/login");
  }


  public search(event: any) {
    this.searchedterm = (event.target as HTMLInputElement).value;
    console.log(this.searchedterm);
    this.cart.search.next(this.searchedterm);
  }




}
