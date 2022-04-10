import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, "FunnyTechQuote", "“Technology can be cool. I mean, think about it: when you see a dishwasher working or an iPhone loading up the next song on its playlist for your jog in the park  doesnt that feel like magic?”.", "By: Catherine Kimani", 0, 0, new Date(2022,4,10) ),
    new Quote(2, "InspiringTechQuote", "“Technology is the future of learning. Students and teachers need to be able to use it in every class because technology provides an interactive platform for teaching material that students can understand better and gives them a new way of interacting with classmates from all over the world.”", " By: Diana Kariuki", 0, 0, new Date(2022,2,6)),
    new Quote(3, "MotivationalTechQuote", "If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.", " By: Nikas Nganga", 0, 0, new Date(2022,3,25)),
    new Quote(4, "TechQuote", "Technology has made our world so much smaller, that we can now learn about other cultures or countries with ease thanks to Youtube videos and online news stories!”", "By: Benard Kimani", 0, 0, new Date(2022,4,8)),
  ];

  arr: number[] = this.quotes.map((quote) => quote.upvotes);
  highest = Math.max(...this.arr);

  addNewQuote(quote:Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote)
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
