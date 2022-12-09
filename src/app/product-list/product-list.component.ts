import { Component, Output, EventEmitter } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  hovered = "No component was hovered";

  @Output() hoveredEvent = new EventEmitter<string>();

  outputHovered(event: any) {
    console.log("outputHovered");
    this.hoveredEvent.emit(event);
    this.hovered = "Latest hovered component: " + event;
  }

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/