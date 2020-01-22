import {
  TRAINS_ERRORED,
  TRAINS_RECEIVED,
  TRAINS_REQUESTED,
} from 'constants/actionTypes';
//import trainGeojsonToGraphics from '../../utils/trainGeojsonToGraphicsConverter.util';

const initialTrainState = {
  trains: null,
  fetching: false,
  error: false
};

export default (state = initialTrainState, action) => {
  switch (action.type) {
    case TRAINS_REQUESTED:
      return {
        ...state,
        fetching: true
      };
    case TRAINS_RECEIVED:
      return {
        ...state,
        //trains: trainGeojsonToGraphics(action.payload.trains),
        trains: action.payload.trains,
        fetching: false,
        error: false
      };
    case TRAINS_ERRORED:
      return {
        ...state,
        trains: null,
        fetching: false,
        error: true
      };
    default:
      return state;
  }
};