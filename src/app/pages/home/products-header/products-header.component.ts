import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss']
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>;
  @Output() itemCountChange = new EventEmitter<number>;
  @Output() itemSortChange = new EventEmitter<string>;
  sort = 'desc';
  itemsShowCount = 12;

  onSortUpdate(newSort : string) : void{
    this.sort = newSort;
    this.itemSortChange.emit(newSort);
  }

  onItemsUpdated(count : number) : void{
    this.itemsShowCount = count;
    this.itemCountChange.emit(count);
  }

  onColumnsUpdated(columns : number) : void{
    this.columnsCountChange.emit(columns);
  }
}
