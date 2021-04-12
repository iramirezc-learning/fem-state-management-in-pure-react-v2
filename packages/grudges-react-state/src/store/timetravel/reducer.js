import initialState from './state';
import { UNDO, REDO } from './actions';

const reducer = (state = initialState, action) => {
  const { type } = action;

  console.log(`[timetravelReducer] ${type}`, { state });

  if (type === UNDO) {
    if (state.past.length === 0) {
      console.warn('Nothing to Undo.');

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
      console.warn('Nothing to Redo.');

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

  return state;
};

export default reducer;
