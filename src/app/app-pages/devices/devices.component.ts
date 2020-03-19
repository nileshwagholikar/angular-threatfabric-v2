import {Component, OnInit, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';

import { Device } from './../../app-interfaces/device';
import { DataService } from './../../app-service/data.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})

export class DevicesComponent implements OnInit, OnDestroy {
  devices: Device[];
  deviceService;

  constructor(public service: DataService, private router: Router) {}

  selectDevice(id) {
    this.router.navigate(['/devices/details/', id]);
  }

  ngOnInit() {
    // $("#example").DataTables();
    if(this.service.devices.length) {
      this.devices = this.service.devices;
    } else {
    this.deviceService = this.service.getDevices()
      .subscribe((data: Device[]) => {
        this.devices = data;
        this.service.devices = data;
      });
    }

  }

  ngOnDestroy(): void {
    if(this.deviceService) {
      this.deviceService.unsubscribe();
    }
  }
}
