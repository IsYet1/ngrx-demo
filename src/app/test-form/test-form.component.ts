import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/';
import * as appActions from 'src/app/state/app.actions';


@Component({
  selector: 'ngrx-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  turnOn = () =>
    this.store.dispatch(new appActions.ExampleStateOn())

  turnOn8 = () =>
    this.store.dispatch(appActions.ExampleStateOn8())

  turnOff8 = () =>
    this.store.dispatch(appActions.ExamplStateOff8())

  turnOff = () =>
    this.store.dispatch(new appActions.ExampleStateOff())

  turnOnWithEffect = () =>
    this.store.dispatch(new appActions.ExampleStateOnEffect())

  turnParameter = (onOff: boolean) =>
    this.store.dispatch(new appActions.ExampleStateParameter(onOff))

}
