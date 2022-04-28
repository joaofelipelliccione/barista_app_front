import { SET_ALL_CAPSULES, SET_ORIGINAL_CAPSULES } from '../actions/capsulesAC';

const INITIAL_STATE = {
  allCapsules: JSON.parse(localStorage.getItem('allCapsules')) || [],
  originalCapsules: JSON.parse(localStorage.getItem('originalCapsules')) || [],
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_ALL_CAPSULES:
    return {
      ...state,
      allCapsules: action.allCapsulesArray,
    };

  case SET_ORIGINAL_CAPSULES:
    return {
      ...state,
      originalCapsules: action.originalCapsulesArray,
    };

  default:
    return state;
  }
}

export default user;
