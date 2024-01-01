import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './Services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecomStore';
  cart : Cart = {items: []};

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.cartService.cart.subscribe((_cart) =>  {
      this.cart = _cart;
    })
  }
}
