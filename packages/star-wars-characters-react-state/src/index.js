import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CharacterList from './CharacterList';
import dummyData from './dummy-data';
import endpoint from './endpoint';
import './styles.scss';

const Application = () => {
  const [characters, setCharacters] = useState(dummyData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCharacters([]);
    setIsLoading(true);
    setError(null);

    fetch(endpoint + '/characters')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setIsLoading(false);
        setCharacters(response.characters || []);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

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
