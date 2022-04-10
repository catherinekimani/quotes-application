import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  numberOfupvotes: number = 0;
  likes() {
    this.numberOfupvotes++;
  }
numberOfdownvotes: number = 0;
  dislikes() {
    this.numberOfdownvotes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
