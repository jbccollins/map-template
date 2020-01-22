import { combineReducers } from 'redux';

import layers from 'reducers/mapview/layers';
import error from 'reducers/mapview/error';
import visibleLayers from 'reducers/mapview/visibleLayers';
import layerInfo from 'reducers/mapview/layerInfo';
import state from 'reducers/mapview/state';
import trains from 'reducers/mapview/trains';

const mapview = combineReducers({
  layers,
  error,
  visibleLayers,
  layerInfo,
  state,
  trains,
});

export default mapview;
