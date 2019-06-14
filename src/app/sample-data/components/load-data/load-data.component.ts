import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/';
import * as appActions from 'src/app/state/app.actions';
import * as appSelectors from 'src/app/state/selectors';
import { SampleData } from 'src/app/data/sample-data.model';

@Component({
  selector: 'ngrx-load-data',
  templateUrl: './load-data.component.html',
  styleUrls: ['./load-data.component.scss']
})
export class LoadDataComponent implements OnInit {
  exampleState$: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.exampleState$ = this.store.pipe(select(appSelectors.getExampleState));
  }

  loadData = () =>
    this.store.dispatch(new appActions.SampleDataLoadRequest())

  postNewCompany = () => {
    const newCompany: SampleData = {
      company: 'NEW',
      email: 'New Email',
      first_name: 'New',
      last_name: 'Company',
      gender: 'na',
      role: 'Sales',
    };
    this.store.dispatch(new appActions.SampleDataPostRequest(newCompany));
  }

  postCurCompany = () => {
    const newPost: SampleData = {
      email: 'New Email',
      first_name: 'New',
      last_name: 'Company',
      gender: 'na',
      role: 'Sales',
    };
    this.store.dispatch(new appActions.SampleDataPostRequestCurCompany(newPost));
  }
}
