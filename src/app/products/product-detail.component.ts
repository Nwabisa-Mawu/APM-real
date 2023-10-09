import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product-interface';

@Component({
  // selector property only required if the component will be nested inside another component. not needed here because will be a standalone page.
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  // this makes the property undefined until the data is received
  product: IProduct | undefined;

  // use the activated Route service provided by angular to display the selected product- fetches the parameter and searches the data for the relevant info.
  // inject the activated route instance
  // to route back, then add the parameter to the constructor
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  // This is where we put the code to read the route parameter - executed when the code is initialized so will fetch the data at the start and can use when the product is clicked.
  ngOnInit(): void {
    // only need to read the id details once so will use the snapshot technique
    // enclose in a number function to make the id a number and not a string
    const id = Number(this.route.snapshot.paramMap.get('id'));
  }

  // method that navigates from details page back to the products page
  onBack(): void {
    this.router.navigate(['/products']);
  }

}
