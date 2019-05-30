import { ActionTypes, AppActions } from './app.actions';
import { SampleData } from 'src/app/data/sample-data.model';

export interface AppState {
  exampleStateBool: boolean;
  sampleData: SampleData[];
  currentCompany: string;
  lastError: any;
}

const initialState: AppState = {
  exampleStateBool: false,
  sampleData: [],
  currentCompany: undefined,
  lastError: undefined,
};

export function appReducer(state = initialState, action) {
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
        return { ...state, lastError: action.payload };
    case ActionTypes.SampleDataPostRequestFail:
        return { ...state, lastError: action.payload };

    case ActionTypes.SetCurrentCompany:
      return {...state, currentCompany: action.payload };

    default:
      return state;
  }
}
