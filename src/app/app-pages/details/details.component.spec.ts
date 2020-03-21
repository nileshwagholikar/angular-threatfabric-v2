import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { DetailsComponent } from './details.component';
import { HttpClientModule } from '@angular/common/http';

import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DataService } from './../../app-service/data.service';

class router {
  navigateByUrl(url: string) {
    return url;
  }
}

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ {provide: Router, useClass: router, useValue: mockRouter}, DataService ],
      imports: [ RouterTestingModule, HttpClientModule ],
      declarations: [ DetailsComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
