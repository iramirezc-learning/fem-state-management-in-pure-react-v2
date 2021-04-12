import defaultState from './state';
import { UNDO, REDO, GRUDGE_ADD, GRUDGE_FORGIVE } from './actions';

const reducer = (state = defaultState, action) => {
  const { type, payload } = action;

  console.log(type, { state });

  if (type === UNDO) {
    if (state.past.length === 0) {
      console.log('Nothing to Undo');
      return state;
    }

    // When undo, the current present will become the future...
    const newFuture = [state.present, ...state.future];
    // ...the most recent past will become the new present.
    // > We grab the first element in the array
    // > as if it were a "pop" operation in a Stack.
    const [newPresent, ...newPast] = state.past;

    return {
      past: newPast,
      present: newPresent,
      future: newFuture
    };
  }

  if (type === REDO) {
    if (state.future.length === 0) {
      console.log('Nothing to Redo');
      return state;
    }

    // When redo, the most recent future will become the current present...
    // > We grab the first element in the array
    // > as if it were a "pop" operation in a Stack.
    const [newPresent, ...newFuture] = state.future;
    // ... the current present will become the past.
    const newPast = [state.present, ...state.past];

    return {
      past: newPast,
      present: newPresent,
      future: newFuture
    };
  }

  if (type === GRUDGE_ADD) {
    const newPresent = [payload.grudge, ...state.present];

    // The current present becomes part of the past.
    // We push present as the first element in the array
    // as if it were a Stack.
    return {
      past: [state.present, ...state.past],
      present: newPresent,
      future: []
    };
  }

  if (type === GRUDGE_FORGIVE) {
    const newPresent = state.present.map((grudge) => {
      if (grudge.id !== payload.id) return grudge;
      return { ...grudge, forgiven: !grudge.forgiven };
    });

    // The current present becomes part of the past.
    return {
      past: [state.present, ...state.past],
      present: newPresent,
      future: []
    };
  }

  return state;
};

export default reducer;
