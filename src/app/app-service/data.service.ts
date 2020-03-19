import { Injectable, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Device} from './../app-interfaces/device';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  // private _devices: Observable<Device[]>;
  private _dailyInfectedURL = 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json';
  private _devicesURL = 'assets/devices.json';
  private _rootedURL = 'assets/rooted.json';
  private _infectedURL = 'assets/infected.json';
  public devices = [];
  private _device;
    
  constructor(private http: HttpClient) { }

  public getDevices() {
    return this.http.get(this._devicesURL);
  }

  public getDailyInfectedChartJSON() {
    return this.http.get(this._dailyInfectedURL);
  }

  public getInfectedChartJSON() {
    return this.http.get(this._infectedURL);
  }
  
  public getRootedChartJSON() {
    return this.http.get(this._rootedURL);
  }
}
