import { Component } from '@angular/core';

// decorator with the metadata for the component, also can store css and html template as urls to files.
@Component({
  selector: 'pm-root',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">
    <h1 class="navbar-brand">{{pageTitle}}</h1>
    <ul class="nav nav-pills">
      <li><a class="nav-link" routerLink="/welcome"><button class="rounded bg-info border-0">Home</button></a></li>
      <li><a class="nav-link" routerLink="/products"><button class="rounded bg-info border-0">Product List</button></a></li>
    </ul>
  </nav>
  <!-- enclose in a div for styling the different views inside a container -->
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  // property used in the component
  pageTitle: string = 'Acme Product Management';
}
