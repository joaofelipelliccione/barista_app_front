export const SET_ALL_CAPSULES = 'SET_ALL_CAPSULES';

const setAllCapsulesAC = (allCapsulesArray) => ({
  type: SET_ALL_CAPSULES,
  allCapsulesArray,
});

export default setAllCapsulesAC;
