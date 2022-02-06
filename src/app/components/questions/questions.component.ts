import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  manufacturer = '';
  minPrice: any;
  maxPrice: any;
  minDiagonal: any;
  maxDiagonal: any;
  resolution = '';
  updateFrequency = ''; //use as number
  matrixType = '';
  minResponseTime: any;
  maxResponseTime: any;
  minContrastValue: any;
  maxContrastValue: any;
  playModelChecked = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showResults() {
    console.log("manufacturer value: " + this.manufacturer)
    console.log("minPrice value: " + this.minPrice)
    console.log("maxPrice value: " + this.maxPrice)
    console.log("playModelChecked value: " + this.playModelChecked)

    this.router.navigate(['results']);
  }
}
