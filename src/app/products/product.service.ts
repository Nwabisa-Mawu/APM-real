import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from './product-interface';

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
  private productUrl = '/api/products/products.json'

  // injecting a service - to provide an instance of the HttpClient service - idnetify it as dependency in the constructor
  constructor(private http: HttpClient) { }

  // method that returns an array for products
  // make the return type of the getProduct method an Observable of the IProduct[] generic type.
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      // exception handling using Observable pipe methods - tap taps into observable stream and lets us look at the emitted values without transforming the stream - in this caes will log it to the console.
      tap(data => console.log('All: ', JSON.stringify(data))),
      // the catchError catches any error
      catchError(this.handleError)
    );  //set the generic parameter of the method to IProduct[] so that it can map the response in a way that we want the data.
  }

  // method for handling the error, can send to error log or alert on page etc.
  private handleError(err: HttpErrorResponse) {
    // In this case, we will just log the error to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // a client-side or network error. handle it accordingly
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // the backend returned an unsuccessful response code.
      // The response may contain clues as to what went wrong
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage)
    return throwError(() => errorMessage);
  }
}
