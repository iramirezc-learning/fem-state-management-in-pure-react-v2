export const GRUDGE_ADD = 'GRUDGE/ADD';
export const GRUDGE_FORGIVE = 'GRUDGE/FORGIVE';

export const addGrudge = (grudge) => ({
  type: GRUDGE_ADD,
  payload: { grudge }
});

export const toggleForgive = (id) => ({
  type: GRUDGE_FORGIVE,
  payload: { id }
});

export default {
  GRUDGE_ADD,
  GRUDGE_FORGIVE,
  addGrudge,
  toggleForgive
};
