import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
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
    ]),
    SharedModule
  ]
})
export class ProductModule { }
