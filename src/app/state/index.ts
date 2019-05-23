import { ActionTypes, AppActions } from './app.actions';

export interface AppState {
  exampleStateBool: boolean;
}

const initialState: AppState = {
  exampleStateBool: false
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
