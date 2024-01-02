import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();
  categoriesSubscription! : Subscription;
  categories! : Array<string>

  constructor(private storeService: StoreService){}

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService.getAllCategories()
      .subscribe((response) => this.categories = response)
    
  }

  onShowCategory(category : string) : void {
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
      if (this.categoriesSubscription){
        this.categoriesSubscription.unsubscribe();
      }
  }
}
