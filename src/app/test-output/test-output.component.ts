import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { AppState8 } from 'src/app/state/';
import * as appSelectors from 'src/app/state/selectors';


@Component({
  selector: 'ngrx-test-output',
  templateUrl: './test-output.component.html',
  styleUrls: ['./test-output.component.scss']
})
export class TestOutputComponent implements OnInit {

  exampleState8$: Observable<boolean>;

  constructor(
    private store: Store<AppState8>
  ) { }

  ngOnInit() {
    this.exampleState8$ = this.store.pipe(select(appSelectors.getExampleState8));
  }

}
