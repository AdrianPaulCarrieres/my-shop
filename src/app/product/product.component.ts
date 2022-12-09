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

  // add product to cart as an object of productId -> quantity

  // add to cart
  addToCart(product: Product) {
    let cart = [];
    cart = JSON.parse(localStorage.getItem('cart') || `{ ${product.id} : ${0} }`);
    let quantity = cart[product.id] || 0;
    quantity += 1;

    cart[product.id] = quantity;

    console.table(cart);

    localStorage.setItem('cart', JSON.stringify(cart));
  }

  addToCart2(product: Product) {
    let cart = [];

    cart = JSON.parse(localStorage.getItem('cart') || `[]`);

    console.log(cart);

    let item = cart.find((item: any) => item.id === product.id);
    if (item) {
      item.name = product.name;
      item.quantity += 1;
      item.price = product.price;
      item.total = item.quantity * item.price;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        quantity: 1,
        price: product.price,
        total: product.price
      });
    }

    console.table(cart);

    localStorage.setItem('cart', JSON.stringify(cart));
  }

  removeFromCart2(product: Product) {
    let cart = [];
    cart = JSON.parse(localStorage.getItem('cart') || `[]`);

    let item = cart.find((item: any) => item.id === product.id);
    if (item) {
      item.quantity -= 1;
      item.total = item.quantity * item.price;
      if (item.quantity <= 0) {
        cart = cart.filter((item: any) => item.id !== product.id);
      }
    }

    console.table(cart);

    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // remove from cart
  removeFromCart(product: Product) {
    let cart = [];
    cart = JSON.parse(localStorage.getItem('cart') || `{ ${product.id} : ${0} }`);
    let quantity = cart[product.id] || 0;
    quantity -= 1;

    if (quantity <= 0) {
      delete cart[product.id]
    } else {
      cart[product.id] = quantity;
    }

    console.table(cart);

    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
