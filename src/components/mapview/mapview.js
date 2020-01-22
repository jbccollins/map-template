import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { mapController } from '../../controllers/mapController';
import './mapview.scss';

const MapView = () => {
  const mapError = useSelector(state => state.mapview.error.error);
  const mapviewEl = useRef(null);
  useEffect(() => {
    mapController.initializeMap(mapviewEl);
  }, []);
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
