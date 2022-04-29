import { SET_ALL_CAPSULES,
  SET_ORIGINAL_CAPSULES,
  SET_VERTUO_CAPSULES } from '../actions/capsulesAC';

const INITIAL_STATE = {
  allCapsules: JSON.parse(localStorage.getItem('allCapsules')) || [],
  originalCapsules: JSON.parse(localStorage.getItem('originalCapsules')) || [],
  vertuoCapsules: JSON.parse(localStorage.getItem('vertuoCapsules')) || [],
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

  case SET_VERTUO_CAPSULES:
    return {
      ...state,
      vertuoCapsules: action.vertuoCapsulesArray,
    };

  default:
    return state;
  }
}

export default user;
