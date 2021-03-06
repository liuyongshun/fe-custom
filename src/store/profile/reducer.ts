import { Action, State, Item } from './types';

const reducer: any = (state: State, action: Action) => {
  state = state || [];

  switch (action.type) {
    case 'INIT':
      return [...(action.payload as Item[])];
    case 'ADD_RESOURCES': {
      const { payload } = action;

      return state.map((agent) =>
        agent.id === payload.id
          ? {
              ...agent,
              resources: [...agent.resources, ...payload.data]
            }
          : agent
      );
    }
    default:
      return state;
  }
};

export default reducer;
