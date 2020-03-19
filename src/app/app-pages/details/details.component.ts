import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DataService } from './../../app-service/data.service';
import { Device } from 'src/app/app-interfaces/device';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: number;
  private sub: any;
  device;

  constructor(private router: Router, public service: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      const selectedDevice = this.service.devices.filter((device) => device.id === this.id);
      this.device = selectedDevice[0];
    });
  }

  backToList() {
    this.router.navigate(['/devices/']);
  }
}
