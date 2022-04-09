import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponentComponent } from './logo-component/logo-component.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote/quote-detail/quote-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponentComponent,
    QuoteComponent,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
