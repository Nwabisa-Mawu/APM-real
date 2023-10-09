import { Component, OnInit } from '@angular/core';

@Component({
  // selector property only required if the component will be nested inside another component. not needed here because will be a standalone page.
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';

  constructor() { }

  ngOnInit(): void {
  }

}
