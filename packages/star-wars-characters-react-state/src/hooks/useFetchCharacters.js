import { useReducer, useEffect } from 'react';
import { initialState, reducer, actions } from '../store/characters/index';

const {
  fetchCharactersStart,
  fetchCharactersSuccessful,
  fetchCharactersError,
} = actions;

export const useFetchCharacters = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(fetchCharactersStart());

    const doFetch = async () => {
      try {
        const result = await fetch(url);
        const data = await result.json();
        dispatch(fetchCharactersSuccessful(data));
      } catch (err) {
        dispatch(fetchCharactersError(err));
      }
    };

    doFetch();
    // eslint-disable-next-line
  }, []);

  return [state, dispatch];
};

export default useFetchCharacters;
