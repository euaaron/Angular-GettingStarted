import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';

@Component({
  styleUrls: ['./product-detail.component.css'],
  template: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  title: string = 'Product Detail';
  product: IProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
