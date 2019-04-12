import { Component, OnInit } from '@angular/core';
import { ContributorService } from '../../../services/contributor.service';
@Component({
  selector: 'app-viewcontributor',
  templateUrl: './viewcontributor.component.html',
  styleUrls: ['./viewcontributor.component.scss']
})
export class ViewcontributorComponent implements OnInit {

  contributors: Array<any>;
  constructor(private contributorService : ContributorService){}

  ngOnInit() {
    this.contributorService.getAllContributors().subscribe(data=>{
        this.contributors=data;
      });
  }

}
