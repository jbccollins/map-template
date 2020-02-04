export const INIT_MAP = 'INIT_MAP';
export const SET_MAPVIEW_LOAD_ERROR = 'SET_MAPVIEW_LOAD_ERROR';
export const SET_MAPVIEW_READY = 'SET_MAPVIEW_READY';
export const FETCHING_LAYER_INFO = 'FETCHING_LAYER_INFO';
export const LAYER_INFO_RECEIVED = 'LAYER_INFO_RECEIVED';
export const TOGGLE_VISIBLE_LAYER = 'TOGGLE_VISIBLE_LAYER';

export const TRAINS_REQUESTED = 'metro/TRAINS_REQUESTED';
export const TRAINS_RECEIVED = 'metro/TRAINS_RECEIVED';
export const TRAINS_ERRORED = 'metro/TRAINS_ERRORED';

export const requestTrains = () => ({
  type: TRAINS_REQUESTED
});

export const receiveTrains = trains => ({
  type: TRAINS_RECEIVED,
  payload: { trains }
});

export const handleTrainsError = error => ({
  type: TRAINS_ERRORED,
  payload: { error }
});

export const SET_VISIBLE_LINES = "controls/SET_VISIBLE_LINES";