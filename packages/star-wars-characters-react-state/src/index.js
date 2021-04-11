import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useThunkReducer } from './hooks';
import { initialState, reducer, thunks } from './store/characters';
import CharacterList from './CharacterList';
import CharacterView from './CharacterView';
import endpoint from './endpoint';
import './styles.scss';

const { fetchCharacters } = thunks;

const Application = () => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);

  const { response, isLoading, error } = state;

  const characters = (response && response.characters) || [];

  const fetch = () => {
    dispatch(fetchCharacters(endpoint + '/characters'));
  };

  return (
    <div className="Application">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
      <main>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <pre>
            <code>Error: {error.message}</code>
          </pre>
        ) : (
          <section className="sidebar">
            <CharacterList characters={characters} />
          </section>
        )}
        <Route path="/characters/:id" component={CharacterView} />
      </main>
      <button onClick={fetch}>Fetch</button>
    </div>
  );
};

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Application />
  </Router>,
  rootElement,
);
