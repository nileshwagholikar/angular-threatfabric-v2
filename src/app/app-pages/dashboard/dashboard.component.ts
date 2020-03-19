import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as HighCharts from 'highcharts';
import { DataService } from '../../app-service/data.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
    dataInfectedChart;
    infectedChart: Chart;
    infectedChartService;
  
    dataRootedChart;
    rootedChart: Chart;
    rootedChartService;
  
    dataDailyInfectedChart;
    dailyInfectedChart: Chart;
    dailyInfectedChartService;

    constructor(private dataService: DataService) {
        
    }
    

    ngOnInit() {
        // Daily Infected Devices
        this.dailyInfectedChartService = this.dataService.getDailyInfectedChartJSON().subscribe(data => {
            this.dataDailyInfectedChart = data;
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
                    data: this.dataDailyInfectedChart,
                    type: undefined
                }]
            });
        });

        // Rooted Devices
        this.rootedChartService = this.dataService.getRootedChartJSON().subscribe(data => {
            this.dataRootedChart = data;
            this.rootedChart = new Chart({
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
                series: this.dataRootedChart.series
            })
        });

        // Infected Devices
        this.infectedChartService = this.dataService.getInfectedChartJSON().subscribe(data => {
            this.dataInfectedChart = data;
            this.infectedChart = new Chart({
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
                  series: this.dataInfectedChart.series
            })
        });
    }

    ngOnDestroy() {
        this.infectedChartService.unsubscribe();
        this.rootedChartService.unsubscribe();
        this.dailyInfectedChartService.unsubscribe();
    }
}
