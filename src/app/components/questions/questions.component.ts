import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  selected = '';
  selected2 = '';
  selected3 = '';
  selected4 = '';

  constructor() { }

  ngOnInit(): void {
  }

}
