import { ActionTypes, Actions } from './app.actions';

interface State {
  exampleStateBool: boolean;
}

const initialState: State = {
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
