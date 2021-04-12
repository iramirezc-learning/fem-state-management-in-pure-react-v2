import React from 'react';
import NewGrudge from './NewGrudge';
import Actions from './Actions';
import Grudges from './Grudges';

const Application = () => {
  return (
    <div className="Application">
      <NewGrudge />
      <Actions />
      <Grudges />
    </div>
  );
};

export default Application;
