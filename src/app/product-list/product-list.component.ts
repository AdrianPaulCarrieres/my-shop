import { Component, Output, EventEmitter } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  hovering = "No component is being hovered";

  @Output() hoveredEvent = new EventEmitter<string>();

  outputHovered(event: any) {
    event = JSON.parse(event);

    console.table(event);

    if(event.flag) {
      this.hovering = "Hovering " + event.name;
    } else {
      this.hovering = "No component is being hovered";
    }
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