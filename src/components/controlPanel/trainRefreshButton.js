import React from 'react';
import { mapController } from '../../controllers/mapController';

const TrainRefreshButton = () => {
  const handleClick = () => {
    mapController.updateTrains();
  }
  return (
    <div className="TrainRefreshButton" onClick={() => handleClick()}>
      Refresh Train Positions
    </div>
  );
};

export default TrainRefreshButton;
