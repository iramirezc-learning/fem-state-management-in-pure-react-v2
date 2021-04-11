import { useReducer, useEffect } from 'react';
import { initialState, reducer, actions } from '../store/characters';

const {
  fetchCharactersStart,
  fetchCharactersSuccessful,
  fetchCharactersError,
} = actions;

export const useFetchCharacters = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const doFetch = async () => {
      dispatch(fetchCharactersStart());

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
