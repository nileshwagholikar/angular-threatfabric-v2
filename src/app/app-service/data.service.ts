import { Injectable, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Device } from './../app-interfaces/Device';
import { DEVICES } from './../app-data/devices';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortDirection } from './../app-directives/sortable.directive';


interface SearchResult {
  devices: Device[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
}

function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(devices: Device[], column: string, direction: string): Device[] {
  if (direction === '') {
    return devices;
  } else {
    return [...devices].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(device: Device, term: string, pipe: PipeTransform) {
  return device.deviceID.toLowerCase().includes(term.toLowerCase())
    || device.model.toLowerCase().includes(term.toLowerCase())
    || device.type.toLowerCase().includes(term.toLowerCase())
    || device.osVersion.toLowerCase().includes(term.toLowerCase())
    || pipe.transform(device.risk).includes(term)
    || device.lastSeen.toLowerCase().includes(term.toLowerCase())
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _jsonURL = 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json';
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _devices$ = new BehaviorSubject<Device[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };
    
  constructor(private http: HttpClient, private pipe: DecimalPipe) { 
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._devices$.next(result.devices);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get devices$() { return this._devices$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: string) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let devices = sort(DEVICES, sortColumn, sortDirection);

    // 2. filter
    devices = devices.filter(device => matches(device, searchTerm, this.pipe));
    const total = devices.length;

    // 3. paginate
    devices = devices.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({devices, total});
  }

  public getChartJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
