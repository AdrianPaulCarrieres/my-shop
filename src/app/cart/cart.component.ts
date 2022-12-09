import { Component } from '@angular/core';
import { Product } from '../models/product';
import { products } from '../products';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // when components load, get cart from local storage
  items = JSON.parse(localStorage.getItem('cart') || '{}');
  keys: string[] = Object.keys(this.items);
  products: Product[] = products;

  constructor() {
    localStorage.setItem('cart', '{}')
   }

  ngOnInit(): void { }

}
