import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MonitorEntity} from "../../models/MonitorEntity";
import {max} from "rxjs";

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

  sortedMonitors: string[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showResults() {
    this.sortedMonitors = [];
    for (let i = 0; i < ALL_MONITORS.length; i++) {
      if (
        this.checkStringValues(ALL_MONITORS[i].manufacturer, this.manufacturer) &&
        this.checkNumericValues(ALL_MONITORS[i].price, this.minPrice, this.maxPrice) &&
        this.checkNumericValues(ALL_MONITORS[i].diagonal, this.minDiagonal, this.maxDiagonal) &&
        this.checkStringValues(ALL_MONITORS[i].resolution, this.resolution) &&
        this.updateFrequencyCheck(Number(ALL_MONITORS[i].updateFrequency)) &&
        this.checkStringValues(ALL_MONITORS[i].matrixType, this.matrixType) &&
        this.checkNumericValues(ALL_MONITORS[i].responseTime, this.minResponseTime, this.maxResponseTime) &&
        this.checkNumericValues(ALL_MONITORS[i].contrastValue, this.minContrastValue, this.maxContrastValue) &&
        this.playModelCompare(ALL_MONITORS[i])
      ) {
        this.sortedMonitors.push(ALL_MONITORS[i].name);
      }
    }
    localStorage.setItem('sortedMonitorsNames', JSON.stringify(this.sortedMonitors));
    this.router.navigate(['results']);
  }

  playModelCompare(entity: MonitorEntity): boolean {
    if (!this.playModelChecked) {
      return true;
    } else if (
      Number(entity.updateFrequency) > 120 &&
      entity.diagonal > 21 &&
      entity.responseTime < 3
    ) {
      return true;
    }
    return false;
  }

  updateFrequencyCheck(value: number): boolean {
    if (this.updateFrequency == '' || this.updateFrequency == undefined) {
      return true;
    } else if (value <= Number(this.updateFrequency)) {
      return true;
    }
    return false;
  }

  checkStringValues(compareValue: string, inputValue: string): boolean {
    //console.log("checkStringValues: " + compareValue, inputValue)
    if (inputValue == '' || inputValue == undefined) {
      return true;
    } else if (compareValue.localeCompare(inputValue) == 0) {
      return true;
    }

    return false;
  }


  checkNumericValues(compareValue: number, minValue: number, maxValue: number): boolean {
    //console.log("checkNumericValues: " + compareValue, minValue, maxValue);
    if ((minValue === undefined || minValue == null) && (maxValue === undefined || maxValue == null)) {
      return true;
    }

    if (minValue === undefined || minValue == null) {
      if (compareValue <= maxValue) {
        return true;
      }
    } else if (maxValue === undefined || maxValue == null) {
      if (compareValue >= minValue) {
        return true;
      }
    } else {
      if (compareValue >= minValue && compareValue <= maxValue) {
        return true;
      }
    }

    return false;
  }

}
