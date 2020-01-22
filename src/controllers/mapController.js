import config from 'config/config';
import store from '../store/store';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import Legend from 'esri/widgets/Legend';
import layerFactory from 'utils/layerFactory.util';
import { fetchTrains } from '../api/metro';
import {
  requestTrains,
  receiveTrains,
  handleTrainsError,
  SET_VISIBLE_LINES,
  TOGGLE_VISIBLE_LAYER,
} from '../constants/actionTypes';

const { dispatch } = store;

class MapController {
  constructor() {
    this._map = null;
    this._mapview = null;
  }

  updateTrains = () => {
    dispatch(requestTrains());
    fetchTrains()
      .then(trains => {
        dispatch(receiveTrains(trains));
      })
      .catch(e => {
        dispatch(handleTrainsError(e));
        console.warn(e);
      });
  }

  setVisibleLines = visibleLines => {
    dispatch({type: SET_VISIBLE_LINES, payload: { visibleLines }});
  }

  changeLayerVisibility = (id, value) => {
    const layer = this._map.findLayerById(id);
    if (layer) {
      layer.visible = value;
    }
    dispatch({type: TOGGLE_VISIBLE_LAYER, id})
  };

  handleMapViewClick = e => {
    //console.log('Map Is clicked', e);
  };

  initializeMap(domRef) {
    this._map = new Map(config.esri.map);
    this._mapview = new MapView({
      map: this._map,
      container: domRef.current,
      center: [-77.091, 38.8816],
      zoom: 12
    });

    this._mapview.when(
      () => {
        store.dispatch({ type: 'SET_MAPVIEW_LOAD_ERROR', mapError: false });
        store.dispatch({ type: 'SET_MAPVIEW_READY', ready: true });
      },
      error => {
        store.dispatch({
          type: 'SET_MAPVIEW_LOAD_ERROR',
          mapError: false,
          msg: error
        });
        console.log(error);
      }
    );

    this._mapview.on('click', this.handleMapViewClick);

    const legend = new Legend({
      view: this._mapview
    });
    this._mapview.ui.add(legend, 'bottom-left');
    const mapLayers = config.layers.map(l => {
      return layerFactory(l);
    });
    this._map.addMany(mapLayers);
    this.updateTrains();
  }

  getAllLayers() {
    //Esri uses a 'Collection' class for most group of items.
    //https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html
    return this._map.layers.toArray();
  }
}

export const mapController = new MapController();

//for debugging purposes
window.mapController = mapController;
