import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LayerToggle from './layerToggle';
import TrainRefreshButton from './trainRefreshButton';
import { mapController } from '../../controllers/mapController';
import './controlPanel.scss';

const ControlPanel = () => {
  const layers = mapController.getAllLayers();

  const layerToggles = layers.map(layer => (
    <LayerToggle name={layer.id} visibility={layer.visible} key={layer.id} />
  ));

  //const trains = useSelector(state => state.mapview.trains.trains)

  // Force a re-render when the trains change
  // TODO: This only needs to happen the first time the trains are loaded.
  // useEffect(() => {}, [trains])

  return (
    <div className="control-container">
      <h4>I am the control panel</h4>
      {layerToggles}
      <TrainRefreshButton/>
    </div>
  );
};

export default ControlPanel;
