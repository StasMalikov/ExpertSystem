import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface MonitorEntity {
  name: string;
  price: number;
  manufacturer: string;
  diagonal: string;
  resolution: string;
  updateFrequency: string;
  matrixType: string;
  responseTime: number;
  contrastValue: number;
}

const ALL_MONITORS: MonitorEntity[] = [
  { name: 'string', price: 1, manufacturer: 'string', diagonal: 'string',
    resolution: 'string', updateFrequency: 'string', matrixType: 'string',
    responseTime: 1, contrastValue: 1},

  { name: 'string', price: 1, manufacturer: 'string', diagonal: 'string',
    resolution: 'string', updateFrequency: 'string', matrixType: 'string',
    responseTime: 1, contrastValue: 1},

  { name: 'string', price: 1, manufacturer: 'string', diagonal: 'string',
    resolution: 'string', updateFrequency: 'string', matrixType: 'string',
    responseTime: 1, contrastValue: 1},

  { name: 'string', price: 1, manufacturer: 'string', diagonal: 'string',
    resolution: 'string', updateFrequency: 'string', matrixType: 'string',
    responseTime: 1, contrastValue: 1},

  { name: 'string', price: 1, manufacturer: 'string', diagonal: 'string',
    resolution: 'string', updateFrequency: 'string', matrixType: 'string',
    responseTime: 1, contrastValue: 1}
];

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  displayedColumns: string[] = [  'name', 'price', 'manufacturer',
    'diagonal', 'resolution', 'updateFrequency', 'matrixType',
    'responseTime', 'contrastValue'];
  dataSource = ALL_MONITORS;
  constructor() { }

  ngOnInit(): void {
  }

}
