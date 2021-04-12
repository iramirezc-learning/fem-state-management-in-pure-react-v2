export const UNDO = 'UNDO';
export const REDO = 'REDO';

export const undo = () => ({
  type: UNDO
});

export const redo = () => ({
  type: REDO
});

export default {
  UNDO,
  REDO,
  undo,
  redo
};
