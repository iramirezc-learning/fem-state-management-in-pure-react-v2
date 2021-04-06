import React, { useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

const setDocumentTitle = (counter) => {
  document.title = `Count: ${counter}`;
};

const Counter = ({ step }) => {
  const [counter, setCounter] = useLocalStorage(0, 'counter');

  const increment = () => setCounter(counter + step);
  const decrement = () => setCounter(counter - step);
  const reset = () => setCounter(0);

  useEffect(() => {
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
