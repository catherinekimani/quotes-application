import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Quote } from './quote';
import { QuoteComponent } from './quote/quote.component';
const routes: Routes = [
  { path: '', component: QuoteComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
