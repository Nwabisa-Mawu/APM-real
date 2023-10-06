import { Component, OnInit } from '@angular/core';
import { IProduct } from './product-interface';
import { ProductService } from './product.service';
// decorator
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
  // the OnInit lifestyle hook will be used for the data store service to fetch the data
export class ProductListComponent implements OnInit {
  // properties for the class used in the template
  pageTitle: string = 'Product List';
  // set the values of css properties of the images
  imageWidth: number = 50;
  imageMargin: number = 5;
  // create a property to keep track of whther the image is shown/not and it is boolean - initial value of false so that it doesnt show on load.
  showImage: boolean = false;
  // create an array that will hold the filtered list because we dont want to permanently change the original data list
  filteredProducts: IProduct[] = [];

  // will use js getter and setter with a private variable for just them to take the value of the input, store it then return it to the page then will add filtering functionality to the setter
  private _listFilter: string = '';
  // the name of the getter and setter is the name of the property that will be interpolated into the html template
  get listFilter(): string {
    // can include code to process the value before it returned or it can just return the value.
    return this._listFilter;
  }
  // has one parameter which is the value assigned to the private property. The setter is executed anytime a value is assigned to the private property.
  set listFilter(value: string) {
    // use the body perform an operation when the body is changed.
    this._listFilter = value;
    console.log('In setter:', value);
    // put the filtered list changes and display them on the page because this is where the changes are recorded
    this.filteredProducts = this.performFilter(value);
  }

  products: IProduct[] = [];

  // METHODS - usually added below the properties

  // SERVICE INJECTION - using the constructor
  // create a private variable to hold the data being fetched, then create a constructor and make the service class and the private variable parameters, then inside the constructor assign the value of the private variable to the service class
  // Below is the longh hand version of this process
  // private _productService;
  // constructor(productService: ProductService) {
  //   this._productService = productService;
  // }

  // This is the shorthand version of service injection - the ProductService is stated as a data type here for the data that will be taken from the injection
  constructor(private productService: ProductService) {
    // do not put the code to call the service inside here because the in ProductService will go to the backend to get the data and we dont want all this happening in the constructor. So use the OnInit lifecycle hook because it will call the data upon initial loading of the page.
  }

  // create the method that the button click event will call - Note: ts does not need keyword declaration, the parenthesis make it a function
  toggleImage(): void {
    //logic - it just toggles the values of the showImage property
    this.showImage = !this.showImage;
  }

  // to implement the hook, you must create a method for it to explain what it should do
  // store the default value for the filter input here.
  ngOnInit(): void {
    // So use the OnInit lifecycle hook because it will call the data upon initial loading of the page.
    this.products = this.productService.getProducts();
    // assigned the initial value of products to the filtered products so that it shows on the page when it first loads.
    this.filteredProducts = this.products;
  }

  // method to do the filter by taking the input from the getter then adjusting the UI to only show the products that match.
  performFilter(filterBy: string): IProduct[] {
    // filterBy is the value in the getter and setter
    // convert to lowercase to ensure a case insensitive comparison
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    )
  }

  // method for the event passed when the stars component is clicked
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}
