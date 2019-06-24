// import { ActionTypes, AppActions } from './app.actions';
import { SampleData } from 'src/app/data/sample-data.model';

import { createReducer, on } from '@ngrx/store';
import * as appActions from './app.actions';

export interface AppState8 {
  exampleStateBool: boolean;
  sampleData: SampleData[];
  currentCompany: string;
  lastError: any;
}

const initialState8: AppState8 = {
  exampleStateBool: false,
  sampleData: [],
  currentCompany: undefined,
  lastError: undefined
};

export const appReducer8 = createReducer(
  initialState8,
  on(appActions.ExampleStateOn8, state => ({
    ...state,
    exampleStateBool: true
  })),
  on(appActions.ExamplStateOff8, state => ({
    ...state,
    exampleStateBool: false
  })),
  on(appActions.ExampleStateParameter8, (state, { onOrOff }) => ({
    ...state,
    exampleStateBool: onOrOff
  })),
  on(appActions.SampleDataLoadRequestSuccess8, (state, { sampleData }) => ({
    ...state,
    sampleData
  })),
  on(appActions.SampleDataLoadRequestFail8, (state, { errorInfo }) => ({
    ...state,
    lastError: errorInfo
  })),
  on(appActions.SetCurrentCompany8, (state, { company }) => ({
    ...state,
    currentCompany: company
  })),
  on(appActions.SampleDataPostRequestSuccess8, (state, { newCompany }) => ({
    ...state,
    sampleData: addNewCompanyToSampleDataArray(state.sampleData, newCompany)
  })),
  on(appActions.SampleDataPostRequestFail8, (state, { errorInfo }) => ({
    ...state,
    lastError: errorInfo
  })),
);

function addNewCompanyToSampleDataArray(sampleData: SampleData[], newCompany: SampleData): SampleData[] {
  const clonedArray = [...sampleData];
  clonedArray.push(newCompany);
  return clonedArray;
}
