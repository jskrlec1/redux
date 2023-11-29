const ADD_COUNT = 'ADD_COUNT';
const SUBTRACT_COUNT = 'SUBTRACT_COUNT';
const SET_COUNT = 'SET_COUNT';

export function addToCount(number = 1) {
  return { type: ADD_COUNT, number };
}

export function subtractFromCount(number = 1) {
  return { type: SUBTRACT_COUNT, number };
}

export function setCount(count = 0) {
  return { type: SET_COUNT, count };
}

export function reducer(state = 0, action) {
  switch (action.type) {
    case ADD_COUNT:
      return state + action.number;
    case SUBTRACT_COUNT:
      return state - action.number;
    case SET_COUNT:
      return action.count;
    default:
      return state;
  }
}