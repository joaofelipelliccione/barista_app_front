export const SET_ALL_CAPSULES = 'SET_ALL_CAPSULES';
export const SET_ORIGINAL_CAPSULES = 'SET_ORIGINAL_CAPSULES';

const setAllCapsulesAC = (allCapsulesArray) => ({
  type: SET_ALL_CAPSULES,
  allCapsulesArray,
});

export const setOriginalCapsulesAC = (originalCapsulesArray) => ({
  type: SET_ORIGINAL_CAPSULES,
  originalCapsulesArray,
});

export default setAllCapsulesAC;
