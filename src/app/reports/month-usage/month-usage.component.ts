import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-month-usage',
  templateUrl: './month-usage.component.html',
  styleUrls: ['./month-usage.component.scss']
})
export class MonthUsageComponent implements OnInit {

  constructor(private service:ReportService) { }

  report:any;
  labels : string[] = [];
  counts: number[]=[];

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

      console.log(this.labels);
      console.log(this.counts);

    })

    this.LineChart=new Chart('linechart',{
      type:'line',
      data:{
        labels:this.labels,

        datasets:[{
          label:"No of Invoice of Months",
          data:this.counts,
          fill:false,
          lineTension:0.2,
          borderColor:"red",
          borderWidth:1,
        }]
      },

      options:{
        title:{
          text:"LineChart",
          display:true
        },
        scales:{
          yAxes:[{
            ticks:{
              beginAtZero:true
            }
          }]
        }
      }
    });

    
  }

}
