import { Component, Input } from '@angular/core';
import { Cart, CartItem } from '../models/cart.model';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemQuantity = 0;

  @Input()
  get cart(): Cart{
    return this._cart;
  }
  set cart(cart: Cart){
    this._cart = cart;

    this.itemQuantity = cart.items
      .map(item => item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  constructor(private cartService: CartService){}

  getTotal(items: CartItem): number{
    return this.cartService.getTotal(items);
  }
}
