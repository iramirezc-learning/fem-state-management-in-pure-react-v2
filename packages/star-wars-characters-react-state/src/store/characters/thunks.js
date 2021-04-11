import actions from './actions';

const {
  fetchCharactersStart,
  fetchCharactersSuccessful,
  fetchCharactersError,
} = actions;

const fetchCharacters = (url) => {
  return (dispatch) => {
    dispatch(fetchCharactersStart());

    fetch(url)
      .then((response) => response.json())
      .then((response) => dispatch(fetchCharactersSuccessful(response)))
      .catch((error) => dispatch(fetchCharactersError(error)));
  };
};

export default {
  fetchCharacters,
};
