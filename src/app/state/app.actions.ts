import { Action } from '@ngrx/store';

export enum ActionTypes {
  ExampleStateOn = '[Example App] Turn on the Example State',
  ExampleStateOff = '[Example App] Turn off the Example State',
  ExampleStateParameter = '[Example App] Parameter to turn on or off the Example State',
}

export class ExampleStateOn implements Action {
  readonly type = ActionTypes.ExampleStateOn;
}

export class ExampleStateOff implements Action {
  readonly type = ActionTypes.ExampleStateOff;
}

export class ExampleStateParameter implements Action {
  readonly type = ActionTypes.ExampleStateParameter;
  constructor(public payload: boolean) { }
}

export type Actions =
ExampleStateOn
| ExampleStateOff
| ExampleStateParameter
;
