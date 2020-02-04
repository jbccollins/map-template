import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { layers } from 'config/layers.config';
import layerFactory from 'utils/layerFactory.util';

import { mapController } from '../../controllers/mapController';
import trainGeojsonToGraphics from '../../utils/trainGeojsonToGraphicsConverter.util';
import './mapview.scss';

const MapView = () => {
  const mapError = useSelector(state => state.mapview.error.error);
  const trains = useSelector(state => state.mapview.trains.trains);
  const visibleLines = useSelector(state => state.mapview.visibleLines);

  const mapviewEl = useRef(null);

  useEffect(() => {
    mapController.initializeMap(mapviewEl);
  }, []);
  
  const toggleTrains = () => {
    const currentTrainsLayer = mapController._map.findLayerById("metro_trains");
    currentTrainsLayer.graphics.forEach(g => {
      g.visible = g.attributes.line === visibleLines.toLowerCase() || visibleLines === "All";
    })
  }

  useEffect(() => {
    toggleTrains();
  }, [visibleLines])

  useEffect(() => {
    const currentTrainsLayer = mapController._map.findLayerById("metro_trains");
    currentTrainsLayer.removeAll();
    currentTrainsLayer.addMany(trainGeojsonToGraphics(trains));
    toggleTrains();
  }, [trains])

  return (
    <div className="mapview-container">
      {!mapError ? (
        <div className="mapview" ref={mapviewEl} />
      ) : (
        <div>There was an error loading the MapView</div>
      )}
    </div>
  );
};

MapView.propTypes = {
  mapviewEl: PropTypes.instanceOf(Element)
};

export default MapView;
