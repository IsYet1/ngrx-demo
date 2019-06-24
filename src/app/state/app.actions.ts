import { Action } from '@ngrx/store';
import { SampleData } from 'src/app/data/sample-data.model';

import { createAction, props } from '@ngrx/store';


export enum ActionTypes {
  // SampleDataLoadRequest = '[Example app] Sample Data load requested',
  // SampleDataLoadRequestSuccess = '[Example app] Sample Data load succeeded',
  // SampleDataLoadRequestFail = '[Example app] Sample Data load failed',

  // SampleDataPostRequestCurCompany = '[Example app] Sample Data Cur Company Post requested',
  // SampleDataPostRequestCurCompanySuccess = '[Example app] Sample Data Cur Company Post succeeded',
  // SampleDataPostRequestCurCompanyFail = '[Example app] Sample Data Cur Company Post failed',

  // SampleDataPostRequest = '[Example app] Sample Data Post requested',
  // SampleDataPostRequestSuccess = '[Example app] Sample Data Post succeeded',
  // SampleDataPostRequestFail = '[Example app] Sample Data Post failed',

  // SetCurrentCompany = '[Company List] Set the current selected company',
}

//#region Example state actions

export const ExampleStateOn8 = createAction(
  '[8 Example App] Turn on the Example State'
);

export const ExamplStateOff8 = createAction(
  '[8 Example App] Turn off the example state'
);

export const ExampleStateParameter8 = createAction(
  '[8 Example App] Set example boolean to parameter',
  props<{onOrOff: boolean}>()
);

export const ExampleStateOnEffect8 = createAction(
  '[8 Example App] Action handled by Effect to turn on the Example State'
);

export const SampleDataLoadRequest8 = createAction(
  '[8 Example app] Sample Data load requested'
);

export const SampleDataLoadRequestSuccess8 = createAction(
  '[8 Example app] Sample Data load succeeded',
  props<{sampleData: SampleData[]}>()
);

export const SampleDataLoadRequestFail8 = createAction(
  '[8 Example app] Sample Data load failed',
  props<{errorInfo: any}>()
);

export const SetCurrentCompany8 = createAction(
  '[8 Company List] Set the current selected company',
  props<{company: string}>()
);

export const SampleDataPostRequest8 = createAction(
  '[8 Example app] Sample Data post requested',
  props<{newCompany: SampleData}>()
);

export const SampleDataPostRequestSuccess8 = createAction(
  '[8 Example app] Sample Data post succeeded',
  props<{newCompany: SampleData}>()
);

export const SampleDataPostRequestFail8 = createAction(
  '[8 Example app] Sample Data Post failed',
  props<{errorInfo: any}>()
);

export const SampleDataPostRequestCurCompany8 = createAction(
  '[8 Example app] Sample Data Cur Company post requested',
  props<{newCompany: SampleData}>()
);

//#endregion


// export class SampleDataPostRequestCurCompany implements Action {
//   readonly type = ActionTypes.SampleDataPostRequestCurCompany;
//   constructor(public payload: SampleData) {}
// }

// export class SampleDataPostRequestCurCompanySuccess implements Action {
//   readonly type = ActionTypes.SampleDataPostRequestCurCompanySuccess;
//   constructor(public payload: SampleData) {}
// }

// export class SampleDataPostRequestCurCompanyFail implements Action {
//   readonly type = ActionTypes.SampleDataPostRequestCurCompanyFail;
//   constructor(public payload: any) {}
// }

// export class SetCurrentCompany implements Action {
//   readonly type = ActionTypes.SetCurrentCompany;
//   constructor(public payload: string) {}
// }
//#endregion

// export type AppActions =

// | SampleDataLoadRequest
// | SampleDataLoadRequestSuccess
// | SampleDataLoadRequestFail

// | SampleDataPostRequest
// // | SampleDataPostRequestSuccess
// | SampleDataPostRequestFail

// | SampleDataPostRequestCurCompany
// | SampleDataPostRequestCurCompanySuccess
// | SampleDataPostRequestCurCompanyFail

// | SetCurrentCompany
// ;
