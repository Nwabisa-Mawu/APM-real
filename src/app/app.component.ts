import { Component } from '@angular/core';

// decorator with the metadata for the component, also can store css and html template as urls to files.
@Component({
  selector: 'pm-root',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `
})
export class AppComponent {
  // property used in the component
  pageTitle: string = 'Acme Product Management';
}
