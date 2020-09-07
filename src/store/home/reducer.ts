import { Action, State } from './types';

const reducer: any = (state: State, action: Action) => {
  switch (action.type) {
    case 'START':
      return { ...state, loading: true };
    case 'STOP':
      return { ...state, loading: false };
    case 'NEW_RESOURCE':
      return { ...state, newResourceAgentId: action.payload };
    default:
      return state;
  }
};

export default reducer;
