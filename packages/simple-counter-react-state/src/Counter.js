import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

const setDocumentTitle = (counter) => {
  document.title = `Count: ${counter}`;
};

const Counter = ({ step }) => {
  const [counter, setCounter] = useLocalStorage(0, 'counter');
  const [time, setTime] = useState(new Date());

  const increment = () => setCounter(counter + step);
  const decrement = () => setCounter(counter - step);
  const reset = () => setCounter(0);

  useEffect(() => {
    setDocumentTitle(counter);
  }, [counter]);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 50);

    return () => clearInterval(id);
  }, [time]);

  return (
    <div className="Counter">
      <p className="count">{counter}</p>
      <div style={{ textAlign: 'center', fontWeight: 100, marginBottom: 10 }}>
        {time.toISOString()}
      </div>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;
