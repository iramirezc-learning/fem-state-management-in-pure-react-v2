import React, { useReducer } from 'react';

import id from 'uuid/v4';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

import initialState from './initialState';

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

const Application = () => {
  const [grudges, dispatch] = useReducer(reducer, initialState);

  console.log('Rendering App. Grudges: ' + grudges.length);

  const addGrudge = (grudge) => {
    grudge.id = id();
    grudge.forgiven = false;

    dispatch({
      type: GRUDGE_ADD,
      payload: { ...grudge }
    });
  };

  const toggleForgiveness = (id) => {
    dispatch({
      type: GRUDGE_FORGIVE,
      payload: { id }
    });
  };

  return (
    <div className="Application">
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness} />
    </div>
  );
};

export default Application;
