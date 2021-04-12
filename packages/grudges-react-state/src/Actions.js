import React, { useContext } from 'react';

import { GrudgeContext } from './GrudgeContext';

const Actions = React.memo(() => {
  const { controlState } = useContext(GrudgeContext);
  const { hasPast, hasFuture, undo, redo } = controlState;

  console.log('[Rendering] <Actions>');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="Actions" onSubmit={handleSubmit}>
      <button onClick={undo} disabled={!hasPast}>
        Undo
      </button>
      <button onClick={redo} disabled={!hasFuture}>
        Redo
      </button>
    </form>
  );
});

export default Actions;
