import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from "./store/store.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';
import { StoreFirstGuard } from './storeFirst.guard';
//import { SearchByNamePipe } from './store/search-by-name.pipe';






@NgModule({
  imports: [BrowserModule, StoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    StoreModule,
    RouterModule.forRoot([
    { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard] },
    { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
    { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
    {
      path: "admin",
      loadChildren: "./admin/admin.module#AdminModule",
      canActivate: [StoreFirstGuard]
      },
    { path: "**", redirectTo: "/store" }
    ])],
  declarations: [
    AppComponent
  

  ],
  
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
