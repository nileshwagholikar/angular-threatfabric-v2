import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as HighCharts from 'highcharts';
import { DataService } from '../../app-service/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  infectedChart = new Chart({
    chart: {
      type: 'column'
    },
    title: {
        text: 'Infected Devices'
    },
    subtitle: {
        text: 'Source: DotCom.com'
    },
    xAxis: {
        categories: [
            'Samsung',
            'LG',
            'Sony',
            'Xiaomi',
            'Huawei',
            'Oppo',
            'Apple'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Infected'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
          name: 'Android 8.0',
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 0],
          type: undefined
      }, {
          name: 'Android 9.0',
          data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 0],
          type: undefined
      }, {
          name: 'Android 10.0',
          data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 0],
          type: undefined
      }, {
          name: 'iOS',
          data: [0, 0, 0, 0, 0, 0, 57.4],
          type: undefined
    }]
  });

  rootedChart = new Chart({
    chart: {
      type: 'column'
    },
    title: {
        text: 'Rooted Devices'
    },
    subtitle: {
        text: 'Source: DotCom.com'
    },
    xAxis: {
        categories: [
            'Samsung',
            'LG',
            'Sony',
            'Xiaomi',
            'Huawei',
            'Oppo',
            'Apple'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rooted'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
          name: 'Android 8.0',
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 0],
          type: undefined
      }, {
          name: 'Android 9.0',
          data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 0],
          type: undefined
      }, {
          name: 'Android 10.0',
          data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 0],
          type: undefined
      }, {
          name: 'iOS',
          data: [0, 0, 0, 0, 0, 0, 57.4],
          type: undefined
    }]
  });
  data = '';
  dailyInfectedChart = {};

    constructor(private dataService: DataService) {
        this.dataService.getChartJSON().subscribe(data => {
            this.data = data;
            this.dailyInfectedChart = new Chart({
                chart: {
                    zoomType: 'x',
                    type: 'area'
                },
                title: {
                    text: 'Infected devices per day'
                },
                subtitle: {
                    text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: 'Infected Devices'
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, HighCharts.getOptions().colors[0]],
                                [1, 'rgba(124, 181, 236, 0)']
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
        
                series: [{
                    name: 'Infected Devices',
                    data: this.data,
                    type: undefined
                }]
            });
        });
    }
    

    ngOnInit() {
    }
}
