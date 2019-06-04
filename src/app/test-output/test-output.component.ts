import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/';
import * as appSelectors from 'src/app/state/selectors';


@Component({
  selector: 'ngrx-test-output',
  templateUrl: './test-output.component.html',
  styleUrls: ['./test-output.component.scss']
})
export class TestOutputComponent implements OnInit {

  exampleState$: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.exampleState$ = this.store.pipe(select(appSelectors.getExampleState));
  }

}
