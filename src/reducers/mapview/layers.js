import { INIT_MAP } from 'constants/actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_MAP:
      return action.mapLayers || initialState;
    default:
      return state;
  }
};
