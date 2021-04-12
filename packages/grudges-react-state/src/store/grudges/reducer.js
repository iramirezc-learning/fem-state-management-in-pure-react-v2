import initialState from './state';
import { GRUDGE_ADD, GRUDGE_FORGIVE } from './actions';

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  console.log(`[grudgesReducer] ${type}`, { state });

  if (type === GRUDGE_ADD) {
    return [payload.grudge, ...state];
  }

  if (type === GRUDGE_FORGIVE) {
    return state.map((grudge) => {
      if (grudge.id !== payload.id) return grudge;
      return { ...grudge, forgiven: !grudge.forgiven };
    });
  }

  return state;
};

export default reducer;
