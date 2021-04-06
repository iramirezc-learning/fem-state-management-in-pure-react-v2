import React, { Component } from 'react';

const COUNTER_STATE = 'COUNTER_STATE';

const getStateFromLocalStorage = () => {
  const state = localStorage.getItem(COUNTER_STATE);

  if (state) {
    try {
      return JSON.parse(state);
    } catch (err) {}
  }

  return { counter: 0 };
};

const storeStateInLocalStorage = (state) => {
  localStorage.setItem(COUNTER_STATE, JSON.stringify(state));
};
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = getStateFromLocalStorage();

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState(
      ({ counter }, { step }) => ({ counter: counter + step }),
      () => storeStateInLocalStorage(this.state),
    );
  }

  decrement() {
    this.setState(
      ({ counter }, { step }) => ({ counter: counter - step }),
      () => storeStateInLocalStorage(this.state),
    );
  }

  reset() {
    this.setState({ counter: 0 }, () => storeStateInLocalStorage(this.state));
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="Counter">
        <p className="count">{counter}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;
