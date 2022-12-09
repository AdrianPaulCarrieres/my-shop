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
