import React, { useReducer, useCallback } from 'react';
import initialState from './initialState';
import id from 'uuid/v4';

export const GrudgeContext = React.createContext();

const GRUDGE_ADD = 'GRUDGE/ADD';
const GRUDGE_FORGIVE = 'GRUDGE/FORGIVE';

const reducer = (state = [], action = {}) => {
  if (action.type === GRUDGE_ADD) {
    return [action.payload, ...state];
  } else if (action.type === GRUDGE_FORGIVE) {
    return state.map((grudge) => {
      if (grudge.id !== action.payload.id) return grudge;
      return { ...grudge, forgiven: !grudge.forgiven };
    });
  }

  return state;
};

export const GrudgeProvider = ({ children }) => {
  const [grudges, dispatch] = useReducer(reducer, initialState);

  console.log('Rendering GrudgeProvider. Grudges: ' + grudges.length);

  const addGrudge = useCallback(
    (grudge) => {
      grudge.id = id();
      grudge.forgiven = false;

      dispatch({
        type: GRUDGE_ADD,
        payload: { ...grudge }
      });
    },
    [dispatch]
  );

  const toggleForgiveness = useCallback(
    (id) => {
      dispatch({
        type: GRUDGE_FORGIVE,
        payload: { id }
      });
    },
    [dispatch]
  );

  const value = { grudges, addGrudge, toggleForgiveness };

  return (
    <GrudgeContext.Provider value={value}>{children}</GrudgeContext.Provider>
  );
};
