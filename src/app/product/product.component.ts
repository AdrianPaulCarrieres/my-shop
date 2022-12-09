import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  product!: Product;

  @Output() hoveredEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  hovered(value: string) {
    this.hoveredEvent.emit(value);
  }

  // add a set of functions to add or remove product to cart in the localStorage
  // add to cart
  addToCart(product: Product) {
    let cart = [];
    if (localStorage.getItem('cart') !== null) {
      cart = JSON.parse(localStorage.getItem('cart') || '{}');
      cart = [product, ...cart];
    } else {
      cart = [product];
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.table(cart);
  }

  // remove from cart
  removeFromCart(product: Product) {
    let cart = [];
    if (localStorage.getItem('cart') !== null) {
      cart = JSON.parse(localStorage.getItem('cart') || '{}');
      cart = cart.filter((p: Product) => p.id !== product.id);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
