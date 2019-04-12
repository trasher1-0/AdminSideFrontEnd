import { Component, OnInit, Inject } from '@angular/core';
import { ContributorService } from '../../../services/contributor.service';
import { MatDialog ,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-viewcontributor',
  templateUrl: './viewcontributor.component.html',
  styleUrls: ['./viewcontributor.component.scss']
})
export class ViewcontributorComponent implements OnInit {

  contributors: Array<any>;
  constructor(private contributorService : ContributorService,public dialog: MatDialog){}

  ngOnInit() {
    this.contributorService.getAllContributors().subscribe(data=>{
        this.contributors=data;
      });
  }

  remove(id) {
      this.contributorService.deleteContributor(id).subscribe(result => {
      }, error => console.error(error));   
  }
}
