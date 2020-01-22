import React from 'react';
import LayerToggle from './layerToggle';
import { mapController } from '../../controllers/mapController';
import './controlPanel.scss';

const ControlPanel = () => {
  const layers = mapController.getAllLayers();

  const layerToggles = layers.map(layer => (
    <LayerToggle name={layer.id} visibility={layer.visible} key={layer.id} />
  ));

  return (
    <div className="control-container">
      <h4>I am the control panel</h4>
      {layerToggles}
    </div>
  );
};

export default ControlPanel;
