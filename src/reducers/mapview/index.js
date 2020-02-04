import { combineReducers } from 'redux';

import layers from 'reducers/mapview/layers';
import error from 'reducers/mapview/error';
import visibleLayers from 'reducers/mapview/visibleLayers';
import visibleLines from 'reducers/mapview/visibleLines';
import layerInfo from 'reducers/mapview/layerInfo';
import state from 'reducers/mapview/state';
import trains from 'reducers/mapview/trains';

const mapview = combineReducers({
  layers,
  error,
  visibleLayers,
  visibleLines,
  layerInfo,
  state,
  trains,
});

export default mapview;
