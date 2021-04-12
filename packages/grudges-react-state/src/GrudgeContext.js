import React, { useReducer, useCallback } from 'react';
import id from 'uuid/v4';
import { defaultState, reducer, actions } from './store';

export const GrudgeContext = React.createContext();

export const GrudgeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { present: grudges } = state;

  console.log('[Rendering] <GrudgeProvider>', { grudges });

  const undo = useCallback(() => dispatch(actions.undo()), [dispatch]);
  const redo = useCallback(() => dispatch(actions.redo()), [dispatch]);

  const addGrudge = useCallback(
    (grudge) => {
      grudge.id = id();
      grudge.forgiven = false;

      dispatch(actions.addGrudge(grudge));
    },
    [dispatch]
  );

  const toggleForgiveness = useCallback(
    (id) => dispatch(actions.toggleForgive(id)),
    [dispatch]
  );

  const hasPast = !!state.past.length;
  const hasFuture = !!state.future.length;

  const value = {
    grudges,
    addGrudge,
    toggleForgiveness,
    controlState: {
      hasPast,
      hasFuture,
      undo,
      redo
    }
  };

  return (
    <GrudgeContext.Provider value={value}>{children}</GrudgeContext.Provider>
  );
};
