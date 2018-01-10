import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { Angular2SocialLoginModule } from "./services/angular2socialloginmodule.module";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AuthGuard } from './auth-guard.service';

let providers = {
  "google": {
    "clientId": "<your_clientId_on_google>.apps.googleusercontent.com"
  }
  // ,
  // "linkedin": {
  //   "clientId": "LINKEDIN_CLIENT_ID"
  // },
  // "facebook": {
  //   "clientId": "FACEBOOK_CLIENT_ID",
  //   "apiVersion": "v2.4"
  // }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminProductsComponent
  ],
  imports: [
    BrowserModule,
    Angular2SocialLoginModule,
    RouterModule.forRoot([
          
      {path:'admin/products',component:AdminProductsComponent,canActivate:[AuthGuard]},            
      
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);
