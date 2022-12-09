import { Component } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // when components load, get cart from local storage
  cart = JSON.parse(localStorage.getItem('cart') || '[]');
  total = this.calculateTotal(this.cart);
 
  constructor() {
    //localStorage.setItem('cart', '[]');
    console.table(this.cart);
   }

  ngOnInit(): void { }

  addToCart(product: Product) {
    let cart = [];

    cart = JSON.parse(localStorage.getItem('cart') || `[]`);

    console.log(cart);

    let item = cart.find((item: any) => item.id === product.id);
    if (item) {
      item.name = product.name;
      item.quantity += 1;
      item.price = product.price;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        quantity: 1,
        price: product.price,
      });
    }

    console.table(cart);

    localStorage.setItem('cart', JSON.stringify(cart));

    this.cart = cart;

    this.total = this.calculateTotal(this.cart);
  }

  removeFromCart(product: Product) {
    let cart = [];
    cart = JSON.parse(localStorage.getItem('cart') || `[]`);

    let item = cart.find((item: any) => item.id === product.id);
    if (item) {
      item.quantity -= 1;
      if (item.quantity <= 0) {
        cart = cart.filter((item: any) => item.id !== product.id);
      }
    }

    console.table(cart);

    localStorage.setItem('cart', JSON.stringify(cart));

    this.cart = cart;

    this.total = this.calculateTotal(this.cart);
  }

  calculateTotal(cart: any) {
    let total = 0;
    for (let item of cart) {
      total += item.price * item.quantity;
    }
    return total;
  }
}
