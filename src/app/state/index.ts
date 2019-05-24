import { ActionTypes, AppActions } from './app.actions';
import { SampleData } from 'src/app/data/sample-data.model';

export interface AppState {
  exampleStateBool: boolean;
  sampleData: SampleData[];
}

const initialState: AppState = {
  exampleStateBool: false,
  sampleData: [],
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ExampleStateOn:
      return { ...state, exampleStateBool: true };
    case ActionTypes.ExampleStateOff:
      return { ...state, exampleStateBool: false };
    case ActionTypes.ExampleStateParameter:
      return {...state, exampleStateBool: action.payload };
    default:
      return state;
  }
}
