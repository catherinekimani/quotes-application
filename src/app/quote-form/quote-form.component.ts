import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quote: any;
  addQuote: any;
  submitQuote(_quoteForm: any) {
    this.addQuote.emit(this.newQuote)
  }
  newQuote = new Quote(0, "", "","",0,0);

  
  constructor() { }

  ngOnInit(): void {
  }

}
