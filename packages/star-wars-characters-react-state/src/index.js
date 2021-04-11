import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { useFetch } from './hooks';
import CharacterList from './CharacterList';
import endpoint from './endpoint';
import './styles.scss';

const Application = () => {
  const [response, isLoading, error] = useFetch(endpoint + '/characters');

  const characters = (response && response.characters) || [];

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
      </main>
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
