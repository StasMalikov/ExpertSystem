import { Component, OnInit } from '@angular/core';
import {MonitorEntity} from "../../models/MonitorEntity";

const ALL_MONITORS: MonitorEntity[] = [
  { name: 'ASUS VA27EHE', price: 13500, manufacturer: 'ASUS', diagonal: 27,
    resolution: '1920x1080', updateFrequency: '60', matrixType: 'IPS',
    responseTime: 5, contrastValue: 1000},

  { name: 'Optix MAG322CQR', price: 35800, manufacturer: 'MSI', diagonal: 31.5,
    resolution: '2560x1440', updateFrequency: '165', matrixType: '*VA',
    responseTime: 1, contrastValue: 100000000},

  { name: 'Mi Curved Gaming', price: 33600, manufacturer: 'Xiaomi', diagonal: 34,
    resolution: '3840x2160', updateFrequency: '144', matrixType: '*VA',
    responseTime: 4, contrastValue: 3000},

  { name: 'M27Q', price: 32650, manufacturer: 'GIGABYTE', diagonal: 27,
    resolution: '2560x1440', updateFrequency: '170', matrixType: 'IPS',
    responseTime: 0.5, contrastValue: 100000000},

  { name: 'Nitro RG241YPbiipx', price: 16500, manufacturer: 'Acer', diagonal: 23.8,
    resolution: '1920x1080', updateFrequency: '165', matrixType: 'IPS',
    responseTime: 1, contrastValue: 100000000},

  { name: 'ASUS VA21EHE', price: 12000, manufacturer: 'ASUS', diagonal: 21,
    resolution: '1920x1080', updateFrequency: '120', matrixType: 'TN',
    responseTime: 2, contrastValue: 1000},

  { name: 'Optix MAG212CQR', price: 25800, manufacturer: 'MSI', diagonal: 21,
    resolution: '2560x1440', updateFrequency: '120', matrixType: 'TN',
    responseTime: 1, contrastValue: 100000},

  { name: 'Mi Curved Gaming Start', price: 13600, manufacturer: 'Xiaomi', diagonal: 21,
    resolution: '1920x1080', updateFrequency: '80', matrixType: '*VA',
    responseTime: 2, contrastValue: 2000},

  { name: 'M50Q', price: 61000, manufacturer: 'GIGABYTE', diagonal: 50,
    resolution: '3840x2160', updateFrequency: '170', matrixType: 'IPS',
    responseTime: 0.5, contrastValue: 1000000},

  { name: 'Nitro RG271YPbiipx', price: 23564, manufacturer: 'Acer', diagonal: 27,
    resolution: '1920x1080', updateFrequency: '165', matrixType: 'IPS',
    responseTime: 1, contrastValue: 100000}
];

let sortedMonitors: MonitorEntity[];

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
