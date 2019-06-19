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
}

const initialState8: AppState8 = {
  exampleStateBool: false,
};

const initialState: AppState = {
  exampleStateBool: false,
  sampleData: [],
  currentCompany: undefined,
  lastError: undefined,
};

export const appReducer8 = createReducer(
  initialState8,
  on(appActions.ExampleStateOn8,
    state => ({
      ...state,
      exampleStateBool: true
    })
  ),
  on(appActions.ExamplStateOff8,
    state => ({
      ...state,
      exampleStateBool: false
    })
  ),
);

export function appReducer(state = initialState, action) {
  let clonedArray: SampleData[];
  switch (action.type) {
    case ActionTypes.ExampleStateOn:
      return { ...state, exampleStateBool: true };
    case ActionTypes.ExampleStateOff:
      return { ...state, exampleStateBool: false };
    case ActionTypes.ExampleStateParameter:
      return {...state, exampleStateBool: action.payload };

    case ActionTypes.SampleDataLoadRequestSuccess:
      return {...state, sampleData: action.payload };
    case ActionTypes.SampleDataLoadRequestFail:
      return {...state, sampleData: [], lastError: action.payload };

    case ActionTypes.SampleDataPostRequestSuccess:
        clonedArray = [...state.sampleData];
        console.log('%c Cloned Array in reducer', 'color: purple', clonedArray);
        clonedArray.push(action.payload);
        return { ...state, sampleData: clonedArray };

      case ActionTypes.SampleDataPostRequestFail:
        return { ...state, lastError: action.payload };

    case ActionTypes.SampleDataPostRequestCurCompanySuccess:
        clonedArray = [...state.sampleData];
        console.log('%c Cloned Array in Cur Comany reducer', 'color: green', clonedArray);
        clonedArray.push(action.payload);
        return { ...state, sampleData: clonedArray };

      case ActionTypes.SampleDataPostRequestCurCompanyFail:
        return { ...state, lastError: action.payload };

    case ActionTypes.SetCurrentCompany:
      return {...state, currentCompany: action.payload };

    default:
      return state;
  }
}
