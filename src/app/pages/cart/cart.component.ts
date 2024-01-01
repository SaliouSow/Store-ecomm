import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Cart, CartItem, PeriodicElement } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {
  cart: Cart = { items : [{
    product: 'https://via.placeholder.com/150',
    name: 'sneakers',
    price: 150,
    quantity: 1,
    id: 1,
  },
  {
    product: 'https://via.placeholder.com/150',
    name: 'sneakers',
    price: 150,
    quantity: 2,
    id: 2,
  }]}

  dataSource : Array<CartItem> = [];
  displayedColumns : string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }

  getTotal(items: Array<CartItem>) : number{
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }
}
