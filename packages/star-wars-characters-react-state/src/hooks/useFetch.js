import { useReducer, useEffect } from 'react';

const initialState = {
  response: null,
  isLoading: false,
  error: null,
};

const FETCH_IS_LOADING = 'FETCH_IS_LOADING';
const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL';
const FETCH_ERROR = 'FETCH_ERROR';

const fetchIsLoading = () => {
  return {
    type: FETCH_IS_LOADING,
  };
};

const fetchSuccessful = (response) => {
  return {
    type: FETCH_SUCCESSFUL,
    payload: { response },
  };
};

const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: { error },
  };
};

const fetchReducer = (state, action) => {
  console.log('fetchReducer', { action });

  if (action.type === FETCH_IS_LOADING) {
    return {
      ...initialState,
      isLoading: true,
    };
  }

  if (action.type === FETCH_SUCCESSFUL) {
    return {
      ...initialState,
      response: action.payload.response,
    };
  }

  if (action.type === FETCH_ERROR) {
    return {
      ...initialState,
      error: action.payload.error,
    };
  }

  return state;
};

export const useFetch = (url) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    dispatch(fetchIsLoading());

    const doFetch = async () => {
      try {
        const result = await fetch(url);
        const data = await result.json();
        dispatch(fetchSuccessful(data));
      } catch (err) {
        dispatch(fetchError(err));
      }
    };

    doFetch();
    // eslint-disable-next-line
  }, []);

  return [state, dispatch];
};

export default useFetch;
