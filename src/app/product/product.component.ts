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

  hovered = false;

  @Output() hoveringEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  hovering(name: string, flag: boolean) {
    let event = JSON.stringify({name: name, flag: flag});
    this.hoveringEvent.emit(event);

    if(flag) {
      this.hovered = true;
    } else {
      this.hovered = false;
    }
  }

  addToCart(product: Product) {
    let cart = [];

    cart = JSON.parse(localStorage.getItem('cart') || `[]`);

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

    localStorage.setItem('cart', JSON.stringify(cart));
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

    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
