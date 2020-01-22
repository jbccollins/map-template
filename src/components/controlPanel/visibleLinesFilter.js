import React from 'react';
import { useSelector } from 'react-redux';
import { mapController } from '../../controllers/mapController';

const lineFilterOptions = ["All", "Red", "Orange", "Yellow", "Green", "Blue", "Silver"];

const VisibleLinesFilter = () => {
  const visibleLines = useSelector(state => state.mapview.visibleLines)

  const handleVisibleLinesChange = e => {
    mapController.setVisibleLines(e.target.value);
  }

  return (
    <div className="VisibleLinesFilter">
      <div>Filter Metro Lines</div>
      <select value={visibleLines} onChange={e => handleVisibleLinesChange(e)}>
        {
          lineFilterOptions.map(l => <option key={l} value={l}>{l}</option>)
        }
      </select>
    </div>
  );
};

export default VisibleLinesFilter;
