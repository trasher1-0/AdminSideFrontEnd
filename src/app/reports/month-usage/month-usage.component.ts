import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-month-usage',
  templateUrl: './month-usage.component.html',
  styleUrls: ['./month-usage.component.scss']
})
export class MonthUsageComponent implements OnInit {

  constructor(private service:ReportService) { }

  report:any;

  ngOnInit() {
    this.service.getInvoices().subscribe(data=>{
      this.report=data;
      console.log(this.report);
    })
    
  }

}
