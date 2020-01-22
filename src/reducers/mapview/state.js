import {
  SET_MAPVIEW_READY,
} from 'constants/actionTypes';

const initialState = {
  ready: false
};

export function mapReady(state = initialState, action) {
  switch (action.type) {
    case SET_MAPVIEW_READY:
      return {
        ...state,
        ready: action.ready,
      };
    default:
      return state;
  }
}

export default mapReady;
