import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/';
import * as appSelectors from 'src/app/state/selectors';
import { SampleData } from 'src/app/data/sample-data.model';

@Component({
  selector: 'ngrx-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  company$: Observable<string>;
  companyDetails$: Observable<SampleData[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.company$ = this.store.pipe(select(appSelectors.getCurrentCompany8));
    this.companyDetails$ = this.store.pipe(select(appSelectors.getCompanyDetails));
  }

}
