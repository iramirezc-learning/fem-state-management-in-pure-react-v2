import { useReducer } from 'react';
import { initialState, reducer, actions } from '../store/timetravel';

const { UNDO, REDO } = actions;

export const useTimeTravelReducer = (childReducer, childInitialState) => {
  const timeTravelState = {
    ...initialState,
    present: childInitialState
  };

  const timeTravelReducer = (state, action) => {
    const newPresent = childReducer(state.present, action);

    if ([UNDO, REDO].includes(action.type)) {
      return reducer(
        {
          ...state,
          present: newPresent
        },
        action
      );
    } else {
      return {
        past: [state.present, ...state.past],
        present: newPresent,
        future: []
      };
    }
  };

  return useReducer(timeTravelReducer, timeTravelState);
};

export default useTimeTravelReducer;
