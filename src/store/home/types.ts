export type Reducer = (state: State, action: Action) => State;

export interface State {
  loading: undefined | boolean;
  newResourceAgentId: undefined | number;
}

export type Action =
  | { type: 'START' }
  | { type: 'STOP' }
  | { type: 'NEW_RESOURCE'; payload: number }
