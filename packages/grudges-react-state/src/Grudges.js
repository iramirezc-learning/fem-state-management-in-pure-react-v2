import React, { useContext } from 'react';
import Grudge from './Grudge';
import GrudgeContext from './providers/GrudgeContext';

const Grudges = () => {
  const { grudges, toggleForgiveness } = useContext(GrudgeContext);

  console.log('[Rendering] <Grudges>');

  return (
    <section className="Grudges">
      <h2>Grudges ({grudges.length})</h2>
      {grudges.map((grudge) => (
        <Grudge key={grudge.id} grudge={grudge} onForgive={toggleForgiveness} />
      ))}
    </section>
  );
};

export default Grudges;
