export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const products = [
  {
    id: 1,
    name: 'AirPods',
    price: 799,
    description: 'A great airpods with one of the best airpods',
    image: '/assets/images/airpods.png'
  },
  {
    id: 2,
    name: 'iPhone 12',
    price: 699,
    description: 'A great phone with one of the best cameras',
    image: '/assets/images/iphone12.png'
  },
  {
    id: 3,
    name: 'iPhone 14',
    price: 299,
    description: 'A great phone with one of the bestest cameras',
    image: '/assets/images/iphone14.png'
  },
  {
    id: 4,
    name: 'Sasmsung 22',
    price: 299,
    image: '/assets/images/samsung22.png',
  },
  {
    id: 5,
    name: 'Sasmsung Note 10',
    price: 299,
    image: '/assets/images/samsungnote10.png',
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/