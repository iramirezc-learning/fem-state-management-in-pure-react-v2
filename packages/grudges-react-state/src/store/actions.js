export const UNDO = 'UNDO';
export const REDO = 'REDO';
export const GRUDGE_ADD = 'GRUDGE/ADD';
export const GRUDGE_FORGIVE = 'GRUDGE/FORGIVE';

const undo = () => ({
  type: UNDO
});

const redo = () => ({
  type: REDO
});

const addGrudge = (grudge) => ({
  type: GRUDGE_ADD,
  payload: { grudge }
});

const toggleForgive = (id) => ({
  type: GRUDGE_FORGIVE,
  payload: { id }
});

export default {
  undo,
  redo,
  addGrudge,
  toggleForgive
};
