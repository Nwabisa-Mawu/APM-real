import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

// angular module is a class with the NgModule decorator
// everything we declare must be imported
//add the new components' selector names to the declarations
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [BrowserModule,
    // BrowserModule, should only be imported to the root module
    FormsModule,
    HttpClientModule,
    // used to register the router service provider and declares router directives (router link and router outlet )
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      // to ensure that we default to the welcome component on first load
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      // wildcard path incase the requested url does not exist
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
