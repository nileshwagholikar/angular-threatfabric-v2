import {Component, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import { Router } from '@angular/router';

import { Device } from './../../app-interfaces/device';
import { DataService } from './../../app-service/data.service';
import { NgbdSortableHeader, SortEvent } from './../../app-directives/sortable.directive';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent {
  devices$: Observable<Device[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  
  constructor(public service: DataService, public router: Router) {
    this.devices$ = service.devices$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    console.log('called');
    console.log(column, direction);
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  selectDevice(id) {
    console.log(id);
    this.router.navigate(['/details/'+id]);
  }
}
