import { SET_ALL_CAPSULES } from '../actions/capsulesAC';

const INITIAL_STATE = {
  allCapsules: JSON.parse(localStorage.getItem('allCapsules')) || [],
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_ALL_CAPSULES:
    return {
      ...state,
      allCapsules: action.allCapsulesArray,
    };

  default:
    return state;
  }
}

export default user;
