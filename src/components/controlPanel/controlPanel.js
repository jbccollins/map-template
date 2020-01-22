import React from 'react';
import LayerToggle from './layerToggle';
import TrainRefreshButton from './trainRefreshButton';
import { mapController } from '../../controllers/mapController';
import './controlPanel.scss';

const ControlPanel = () => {
  const layers = mapController.getAllLayers();
  console.log(layers);

  const layerToggles = layers.map(layer => (
    <LayerToggle name={layer.label} id={layer.id} visibility={layer.visible} key={layer.id} />
  ));

  return (
    <div className="control-container">
      <h4>Control Panel</h4>
      {layerToggles}
      <TrainRefreshButton/>
    </div>
  );
};

export default ControlPanel;
