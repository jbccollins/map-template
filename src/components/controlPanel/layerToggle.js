import React from 'react';
import { mapController } from '../../controllers/mapController';

const LayerToggle = ({ name, visibility }) => {
  return (
    <div>
      <input
        defaultChecked={visibility}
        onChange={e =>
          mapController.changeLayerVisibility(name, e.target.checked)
        }
        type="checkbox"
        id="layer"
        name="layer"
      />
      <label htmlFor="layer">{name}</label>
    </div>
  );
};

export default LayerToggle;
