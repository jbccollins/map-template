import { combineReducers } from 'redux';

import layers from 'reducers/mapview/layers';
import error from 'reducers/mapview/error';
import visibleLayers from 'reducers/mapview/visibleLayers';
import layerInfo from 'reducers/mapview/layerInfo';
import state from 'reducers/mapview/state';

const mapview = combineReducers({
  layers,
  error,
  visibleLayers,
  layerInfo,
  state,
});

export default mapview;
