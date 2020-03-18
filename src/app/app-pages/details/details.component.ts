import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

import {Observable} from 'rxjs';

import { Device } from './../../app-interfaces/device';
import { DataService } from './../../app-service/data.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: string;
  private sub: any;
  device$: Observable<Device[]>;

  constructor(private router: Router, public service: DataService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.service.searchTerm = this.id;
      this.device$ = this.service.device$;
    });
  }

  backToList() {
    this.router.navigate(['/devices/']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
