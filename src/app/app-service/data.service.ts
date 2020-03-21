import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Device } from './../app-interfaces/device';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  // private _devices: Observable<Device[]>;
  private dailyInfectedURL = 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json';
  private devicesURL = 'assets/devices.json';
  private rootedURL = 'assets/rooted.json';
  private infectedURL = 'assets/infected.json';
  public devices: Device[] = [];
  private device: Device;

  constructor(private http: HttpClient) { }

  public getDevices() {
    return this.http.get(this.devicesURL);
  }

  public getDailyInfectedChartJSON() {
    return this.http.get(this.dailyInfectedURL);
  }

  public getInfectedChartJSON() {
    return this.http.get(this.infectedURL);
  }

  public getRootedChartJSON() {
    return this.http.get(this.rootedURL);
  }
}
