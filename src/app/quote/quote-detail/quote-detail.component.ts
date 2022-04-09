import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  deleteQuote(complete: boolean) {
    this.isComplete.emit(complete);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
