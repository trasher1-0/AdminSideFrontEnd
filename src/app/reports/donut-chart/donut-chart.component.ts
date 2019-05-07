import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

  constructor(private service:ReportService) { }

  report:any;
  labels : string[] = [];
  counts: number[]=[];
  public doughnutChartType = 'doughnut';

  public donutColors=[
    {
      backgroundColor: [
        '#111111',
        '#dc143c',
        '#bbbbbb',
        '#eca520',
        '#eeeeee',
        '#110011',
        '#dff43c',
        '#bffbbb',
        '#ecff20',
        '#eee00e',
    ]
    }
  ];

  LineChart=[];

  ngOnInit() {
    this.service.getInvoices().subscribe(data=>{
      //get service data
      this.report=data;

      //assign each months and counts to arrays
      this.report.forEach(element => {
        this.labels.push(element.month);
        this.counts.push(element.count);
      });
    });
  }

}
