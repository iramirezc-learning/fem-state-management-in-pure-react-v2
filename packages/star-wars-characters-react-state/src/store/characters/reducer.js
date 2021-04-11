import initialState from './state';
import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESSFUL,
  FETCH_CHARACTERS_ERROR,
} from './actions';

const fetchCharactersReducer = (state, action) => {
  const { type, payload } = action;

  console.log(type, { payload });

  if (type === FETCH_CHARACTERS_START) {
    return {
      ...initialState,
      isLoading: true,
    };
  }

  if (type === FETCH_CHARACTERS_SUCCESSFUL) {
    return {
      ...initialState,
      response: payload.response,
    };
  }

  if (type === FETCH_CHARACTERS_ERROR) {
    return {
      ...initialState,
      error: payload.error,
    };
  }

  return state;
};

export default fetchCharactersReducer;
