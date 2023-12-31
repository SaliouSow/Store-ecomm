import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Product } from 'src/app/models/Product.model';

const rowHeight : {[id:number] : number} = {1: 300, 3: 350, 4: 350};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cols = 3;
  category : string | undefined;
  rowHeight : number = rowHeight[this.cols];

  constructor(private cartService : CartService){}

  onColumnsCountChange(colsNumber : number) : void {
    this.cols = colsNumber;
    this.rowHeight = rowHeight[this.cols];
  }

  onShowCategory(newCategory : string) : void {
    this.category = newCategory;
  }

  onAddToCart(product : Product) : void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }
}
