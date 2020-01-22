import {
  SET_MAPVIEW_LOAD_ERROR,
} from 'constants/actionTypes';

const initialState = {
  error: null,
  msg: null
};

export function setMapviewLoadError(state = initialState, action) {
  switch (action.type) {
    case SET_MAPVIEW_LOAD_ERROR:
      return {
        ...state,
        error: action.mapError,
        msg: action.msg
      };
    default:
      return state;
  }
}

export default setMapviewLoadError;
