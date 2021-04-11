export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESSFUL = 'FETCH_CHARACTERS_SUCCESSFUL';
export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';

const fetchCharactersStart = () => {
  return {
    type: FETCH_CHARACTERS_START,
  };
};

const fetchCharactersSuccessful = (response) => {
  return {
    type: FETCH_CHARACTERS_SUCCESSFUL,
    payload: { response },
  };
};

const fetchCharactersError = (error) => {
  return {
    type: FETCH_CHARACTERS_ERROR,
    payload: { error },
  };
};

export default {
  fetchCharactersStart,
  fetchCharactersSuccessful,
  fetchCharactersError,
};
