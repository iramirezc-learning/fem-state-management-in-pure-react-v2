import React from 'react';
import NewGrudge from './NewGrudge';
import EditActions from './EditActions';
import Grudges from './Grudges';

const Application = () => {
  return (
    <div className="Application">
      <NewGrudge />
      <EditActions />
      <Grudges />
    </div>
  );
};

export default Application;
