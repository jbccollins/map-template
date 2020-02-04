import { SET_VISIBLE_LINES } from 'constants/actionTypes';

const initialState = 'All';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBLE_LINES:
      return action.payload.visibleLines;
    default:
      return state;
  }
};