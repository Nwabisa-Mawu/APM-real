import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces';
import { StarComponent } from '../shared/star.components';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { ProductDetailGuard } from './product-detail.guard';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    CommonModule, //needed in every feature module
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      // parameter has been defined for details page
      // add guards to protect the route if the id given does not exist in the data
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
    ])
  ]
})
export class ProductModule { }
