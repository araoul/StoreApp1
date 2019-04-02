import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { StoreComponent } from "./store.component";
import { ModelModule } from '../models/model.module';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetailComponent } from './cartDetail.component';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SearchByNamePipe } from './search-by-name.pipe';


@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule,RouterModule],
    declarations: [StoreComponent,CounterDirective,CartSummaryComponent,CartDetailComponent, 
        CheckoutComponent, HeaderComponent,
        SearchByNamePipe
    ],
    exports: [StoreComponent,CartDetailComponent, CheckoutComponent]
})
export class StoreModule { }
