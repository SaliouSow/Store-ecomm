import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/Services/cart.service';
import { StoreService } from 'src/app/Services/store.service';
import { Product } from 'src/app/models/Product.model';

const rowHeight : {[id:number] : number} = {1: 300, 3: 350, 4: 350};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 3;
  category : string | undefined;
  rowHeight : number = rowHeight[this.cols];
  products : Array<Product> | undefined;
  sort = "desc";
  count = '12';
  productsSubscription! : Subscription;

  constructor(private cartService: CartService, private storeService: StoreService){}

  ngOnInit(): void {
      this.getProducts();
  }

  getProducts(): void {
    this.productsSubscription = this.storeService.getAllProducts(this.sort, this.count, this.category)
      .subscribe((_products) => {
        this.products = _products;
      })
  }

  onColumnsCountChange(colsNumber : number) : void {
    this.cols = colsNumber;
    this.rowHeight = rowHeight[this.cols];
  }

  onShowCategory(newCategory : string) : void {
    this.category = newCategory;
    this.getProducts();
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

  onItemCountChange(newCount: number){
    this.count = newCount.toString();
    this.getProducts()
  }

  onItemSortChange(newSort: string){
    this.sort = newSort;
    this.getProducts()
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
