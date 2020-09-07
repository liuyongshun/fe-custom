import React from 'react';

import { Props } from 'src/types';
import reducer from './reducer';
import { Action, State } from './types';

export const initState: State = {
  loading: undefined,
  newResourceAgentId: undefined
};

const stateCtx = React.createContext(initState);
const dispatchCtx = React.createContext((() => 0) as React.Dispatch<Action>);

export const Provider: React.ComponentType = (props: Props) => {
  const [state, dispatch]: any[] = React.useReducer(reducer, initState);

  return (
    <dispatchCtx.Provider value={dispatch}>
      <stateCtx.Provider value={state}>{props.children}</stateCtx.Provider>
    </dispatchCtx.Provider>
  );
};

export const useDispatch = () => React.useContext(dispatchCtx);

type ValueOf<T> = T[keyof T];

export const useState = (key?: keyof State): State | ValueOf<State> => {
  const state = React.useContext(stateCtx);

  return key ? state[key] : state;
};
