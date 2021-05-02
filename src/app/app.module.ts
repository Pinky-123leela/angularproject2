import { Directive, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './products/counter.component';
import { Directive1 } from './products/directive1';
import { Directive2 } from './products/directive2';
import { ProductListComponent } from './products/product-list.component';
import { CustomerListComponent } from './nested/customer-list.component';
import { Directive3 } from './products/directive3';
import { Directive4 } from './products/directive4';
import { TempCToFPipe } from './products/TempCToPipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CounterComponent,
    Directive1,
    Directive2,
    CustomerListComponent,
    Directive3,
    Directive4,
    TempCToFPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
