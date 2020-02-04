import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LayerToggle from './layerToggle';
import TrainRefreshButton from './trainRefreshButton';
import VisibleLinesFilter from './visibleLinesFilter';
import { mapController } from '../../controllers/mapController';
import './controlPanel.scss';

const ControlPanel = () => {
  const layers = mapController.getAllLayers();

  const visibleLayers = useSelector(state => state.mapview.visibleLayers)

  const layerToggles = layers.map(layer => (
    <LayerToggle name={layer.label} id={layer.id} visibility={layer.visible} key={layer.id} />
  ));

  //useEffect(() => {}, [visibleLayers]);

  return (
    <div className="control-container">
      <h4>Control Panel</h4>
      {layerToggles}
      {visibleLayers.includes("metro_trains") &&
        <div className="subcontrols">
          <TrainRefreshButton/>
          <VisibleLinesFilter/>
        </div>
      }
    </div>
  );
};

export default ControlPanel;
