import { Component } from '@angular/core';
import { Cart, CartItem, PeriodicElement } from 'src/app/models/cart.model';



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

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

  displayedColumns_: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource_ = ELEMENT_DATA;

  ngOnInit(): void {
    this.dataSource = this.cart.items;
    console.log(this.dataSource);
    console.log(this.dataSource[0]);
    console.log(this.dataSource[0].product);
  }

  getTotalPrice(items: Array<CartItem>) : number{
    return items.map((item) => item.price * item.quantity).reduce((prev, current) => prev + current, 0);
  }
}
