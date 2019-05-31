import { Action } from '@ngrx/store';
import { SampleData } from 'src/app/data/sample-data.model';

export enum ActionTypes {
  ExampleStateOn = '[Example App] Turn on the Example State',
  ExampleStateOff = '[Example App] Turn off the Example State',
  ExampleStateParameter = '[Example App] Parameter to turn on or off the Example State',
  ExampleStateOnEffect = '[Example App] Action handled by Effect to turn on the Example State',

  SampleDataLoadRequest = '[Example app] Sample Data load requested',
  SampleDataLoadRequestSuccess = '[Example app] Sample Data load succeeded',
  SampleDataLoadRequestFail = '[Example app] Sample Data load failed',

  SampleDataPostRequestCurCompany = '[Example app] Sample Data Cur Company Post requested',
  SampleDataPostRequestCurCompanySuccess = '[Example app] Sample Data Cur Company Post succeeded',
  SampleDataPostRequestCurCompanyFail = '[Example app] Sample Data Cur Company Post failed',

  SampleDataPostRequest = '[Example app] Sample Data Post requested',
  SampleDataPostRequestSuccess = '[Example app] Sample Data Post succeeded',
  SampleDataPostRequestFail = '[Example app] Sample Data Post failed',

  SetCurrentCompany = '[Company List] Set the current selected company',
}

//#region Example state actions
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

export class ExampleStateOnEffect implements Action {
  readonly type = ActionTypes.ExampleStateOnEffect;
}
//#endregion

//#region Sample data actions
export class SampleDataLoadRequest implements Action {
  readonly type = ActionTypes.SampleDataLoadRequest;
}

export class SampleDataLoadRequestSuccess implements Action {
  readonly type = ActionTypes.SampleDataLoadRequestSuccess;
  constructor(public payload: SampleData[]) {}
}

export class SampleDataLoadRequestFail implements Action {
  readonly type = ActionTypes.SampleDataLoadRequest;
  constructor(public payload: any) {}
}

export class SampleDataPostRequest implements Action {
  readonly type = ActionTypes.SampleDataPostRequest;
  constructor(public payload: SampleData) {}
}

export class SampleDataPostRequestSuccess implements Action {
  readonly type = ActionTypes.SampleDataPostRequestSuccess;
  constructor(public payload: SampleData) {}
}

export class SampleDataPostRequestFail implements Action {
  readonly type = ActionTypes.SampleDataPostRequestFail;
  constructor(public payload: any) {}
}

export class SampleDataPostRequestCurCompany implements Action {
  readonly type = ActionTypes.SampleDataPostRequestCurCompany;
  constructor(public payload: SampleData) {}
}

export class SampleDataPostRequestCurCompanySuccess implements Action {
  readonly type = ActionTypes.SampleDataPostRequestCurCompanySuccess;
  constructor(public payload: SampleData) {}
}

export class SampleDataPostRequestCurCompanyFail implements Action {
  readonly type = ActionTypes.SampleDataPostRequestCurCompanyFail;
  constructor(public payload: any) {}
}

export class SetCurrentCompany implements Action {
  readonly type = ActionTypes.SetCurrentCompany;
  constructor(public payload: string) {}
}
//#endregion

export type AppActions =
ExampleStateOn
| ExampleStateOff
| ExampleStateParameter
| ExampleStateOnEffect

| SampleDataLoadRequest
| SampleDataLoadRequestSuccess
| SampleDataLoadRequestFail

| SampleDataPostRequest
| SampleDataPostRequestSuccess
| SampleDataPostRequestFail

| SampleDataPostRequestCurCompany
| SampleDataPostRequestCurCompanySuccess
| SampleDataPostRequestCurCompanyFail

| SetCurrentCompany
;
