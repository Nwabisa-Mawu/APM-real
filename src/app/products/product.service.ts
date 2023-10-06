import { Injectable } from '@angular/core';
import { IProduct } from './product-interface';
import { HttpClient } from '@angular/common/http';

// injectable decorator used for the services
@Injectable({
  // root lets us access the service all across the application
  // registering the service
  providedIn: 'root'
})
  // using this service to encapsulate the data access features - usually will be used to access data.
  //  a service is a regular angular class until we register it with an angular injector
export class ProductService {

  // to provide the url that will be used to make the http request -  the place where our data is stored
  private productUrl = '/src/api/products/products.json'

  // to provide an instance of the HttpClient service - idnetify it as dependency in the constructor
  constructor(private http: HttpClient) {

  }

  // method that returns an array for products
  getProducts(): IProduct[] {
    return this.http.get<IProduct[]>(this.productUrl);
  };
}
