import { ActionTypes, AppActions } from './app.actions';
import { SampleData } from 'src/app/data/sample-data.model';

import { createReducer, on } from '@ngrx/store';
import * as appActions from './app.actions';

export interface AppState {
  exampleStateBool: boolean;
  sampleData: SampleData[];
  currentCompany: string;
  lastError: any;
}

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

const initialState: AppState = {
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
    sampleData: addCompany(state.sampleData, newCompany)
  })),
  on(appActions.SampleDataPostRequestFail8, (state, { errorInfo }) => ({
    ...state,
    lastError: errorInfo
  })),
);

function addCompany(sampleData: SampleData[], newCompany: SampleData): SampleData[] {
  const clonedArray = [...sampleData];
  clonedArray.push(newCompany);
  return clonedArray;
}


export function appReducer(state = initialState, action) {
  let clonedArray: SampleData[];
  switch (action.type) {

    // case ActionTypes.SampleDataLoadRequestSuccess:
    //   return { ...state, sampleData: action.payload };
    // case ActionTypes.SampleDataLoadRequestFail:
    //   return { ...state, sampleData: [], lastError: action.payload };

    // case ActionTypes.SampleDataPostRequestSuccess:
    //   clonedArray = [...state.sampleData];
    //   console.log('%c Cloned Array in reducer', 'color: purple', clonedArray);
    //   clonedArray.push(action.payload);
    //   return { ...state, sampleData: clonedArray };

    // case ActionTypes.SampleDataPostRequestFail:
    //   return { ...state, lastError: action.payload };

    case ActionTypes.SampleDataPostRequestCurCompanySuccess:
      clonedArray = [...state.sampleData];
      console.log(
        '%c Cloned Array in Cur Comany reducer',
        'color: green',
        clonedArray
      );
      clonedArray.push(action.payload);
      return { ...state, sampleData: clonedArray };

    case ActionTypes.SampleDataPostRequestCurCompanyFail:
      return { ...state, lastError: action.payload };

    // case ActionTypes.SetCurrentCompany:
    //   return { ...state, currentCompany: action.payload };

    default:
      return state;
  }
}
