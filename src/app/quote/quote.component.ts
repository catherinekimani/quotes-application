import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, "Tech", "With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content..", "By: Catherine Kimani", 0, 0),
    new Quote(2, "Tech", "With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.", " By: Diana Kariuki", 0, 0),
    new Quote(3, "Tech", "With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.", " By: Nikas Nganga", 0, 0),
    new Quote(4, "Tech", "With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.", "By: Benard Kimani", 0, 0),
  ];
  quote: any;

  addNewQuote(quote:any) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength + 1;
    this.quote.push(quote)
  }
  
  deleteQuote(isComplete:boolean, index:number){
    if (isComplete) {
      let toDelete = confirm("Are you sure you want to delete this Quote?")

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
