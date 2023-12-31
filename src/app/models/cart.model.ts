export interface Cart {
    items: Array<CartItem>
}

export interface CartItem {
    product: string;
    name: string;
    price: number;
    quantity: number;
    id: number; 
}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }