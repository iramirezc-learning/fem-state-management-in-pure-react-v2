import React, { useContext } from 'react';

import GrudgeContext from './providers/GrudgeContext';

const EditActions = React.memo(() => {
  const { editActions } = useContext(GrudgeContext);
  const { hasPast, hasFuture, undo, redo } = editActions;

  console.log('[Rendering] <EditActions>');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="EditActions" onSubmit={handleSubmit}>
      <button onClick={undo} disabled={!hasPast}>
        Undo
      </button>
      <button onClick={redo} disabled={!hasFuture}>
        Redo
      </button>
    </form>
  );
});

export default EditActions;
