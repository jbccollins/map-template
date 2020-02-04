import React from 'react';
import { mapController } from '../../controllers/mapController';

const LayerToggle = ({ name, visibility, id }) => {
  const layerID = `layer-${id}`;
  return (
    <div className="LayerToggle">
      <input
        defaultChecked={visibility}
        onChange={e =>
          mapController.changeLayerVisibility(id, e.target.checked)
        }
        type="checkbox"
        id={layerID}
        name={layerID}
      />
      <label htmlFor={layerID}>{name}</label>
    </div>
  );
};

export default LayerToggle;
