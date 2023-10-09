import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  // create a method that checks that the product id in the requested url is valid, if not it must reroute to the product page
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot, //provides the current route information
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //assign the id value to the current parameter
    const id = Number(route.paramMap.get('id'));
    if (isNaN(id) || id < 1) {
      alert('Invalid product id');
      // then route back to the products page
      this.router.navigate(['/products']);
      // to let the browser know to cancel activating the product detail route
      return false;
    }
    return true;
  } //provide the router state information

}
