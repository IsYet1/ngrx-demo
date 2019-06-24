import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/';
import * as appActions from 'src/app/state/app.actions';
import { SampleData } from 'src/app/data/sample-data.model';

@Component({
  selector: 'ngrx-load-data',
  templateUrl: './load-data.component.html',
  styleUrls: ['./load-data.component.scss']
})
export class LoadDataComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  loadData = () =>
    this.store.dispatch(appActions.SampleDataLoadRequest8())

  postNewCompany = () => {
    const newCompany: SampleData = {
      company: 'NEW',
      email: 'New Email',
      first_name: 'New',
      last_name: 'Company',
      gender: 'na',
      role: 'Sales',
    };
    this.store.dispatch(appActions.SampleDataPostRequest8({newCompany}));
  }

  postCurCompany = () => {
    const newCompany: SampleData = {
      email: 'New Email',
      first_name: 'New',
      last_name: 'Company',
      gender: 'na',
      role: 'Sales',
    };
    this.store.dispatch(appActions.SampleDataPostRequestCurCompany8({ newCompany }));
  }
}
