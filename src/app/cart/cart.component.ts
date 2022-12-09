import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // when components load, get cart from local storage
  items = this.getCart();

  constructor() { }

  ngOnInit(): void { }

  // get cart from local storage
  getCart() {
    return JSON.parse(localStorage.getItem('cart') || '{}');
  }

  // add buttons to add or remove quantities to carts
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

    this.items = this.getCart();
  }

  // remove from cart
  removeFromCart(product: Product) {
    let cart = [];
    if (localStorage.getItem('cart') !== null) {
      cart = JSON.parse(localStorage.getItem('cart') || '{}');

      const index = cart.indexOf(product);

      cart = cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));

    this.items = this.getCart();
  }
}
