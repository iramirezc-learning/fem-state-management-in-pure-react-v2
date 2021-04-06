import React, { useState, useEffect } from 'react';

const COUNTER_STATE = 'COUNTER_STATE';

const getStateFromLocalStorage = () => {
  let state = localStorage.getItem(COUNTER_STATE);

  if (state) {
    try {
      state = JSON.parse(state);
    } catch (err) {
      state = { counter: 0 };
    }
  }

  return state;
};

const storeStateInLocalStorage = (state) => {
  localStorage.setItem(COUNTER_STATE, JSON.stringify(state));
};

const setDocumentTitle = (counter) => {
  document.title = `Count: ${counter}`;
};

const Counter = ({ step }) => {
  const initialState = getStateFromLocalStorage();
  const [counter, setCounter] = useState(initialState.counter);

  const increment = () => setCounter(counter + step);
  const decrement = () => setCounter(counter - step);
  const reset = () => setCounter(0);

  useEffect(() => {
    storeStateInLocalStorage({ counter });
    setDocumentTitle(counter);
  }, [counter]);

  return (
    <div className="Counter">
      <p className="count">{counter}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;
