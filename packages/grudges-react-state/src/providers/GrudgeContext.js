import React, { useCallback } from 'react';
import id from 'uuid/v4';
import { useTimeTravelReducer } from '../hooks/useTimeTravelReducer';
import { initialState, reducer, actions } from '../store/grudges';
import { actions as editActions } from '../store/timetravel';

export const GrudgeContext = React.createContext();

export const GrudgeProvider = ({ children }) => {
  const [state, dispatch] = useTimeTravelReducer(reducer, initialState);
  const { present: grudges } = state;

  console.log('[Rendering] <GrudgeProvider>', { grudges });

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

  const undo = useCallback(() => dispatch(editActions.undo()), [dispatch]);
  const redo = useCallback(() => dispatch(editActions.redo()), [dispatch]);

  const hasPast = !!state.past.length;
  const hasFuture = !!state.future.length;

  const value = {
    grudges,
    addGrudge,
    toggleForgiveness,
    editActions: {
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

export default GrudgeContext;
