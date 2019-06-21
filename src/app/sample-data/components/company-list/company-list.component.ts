import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/';
import * as appSelectors from 'src/app/state/selectors';
import * as appActions from 'src/app/state/app.actions';

@Component({
  selector: 'ngrx-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies$: Observable<string[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.companies$ = this.store.pipe(select(appSelectors.getUniqueCompanies8));
  }

  setCurrentCompany = (selectedOption: string) =>
    this.store.dispatch(appActions.SetCurrentCompany8({company: selectedOption}))

}
