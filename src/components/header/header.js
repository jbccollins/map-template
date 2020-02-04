import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './header.scss';

const Header = () => {
  const isFetchingTrains = useSelector(state => state.mapview.trains.fetching)

  //useEffect(() => {}, [isFetchingTrains])

  return (
    <div className="header-container">
      <h2>DC Transit Map</h2>
      {isFetchingTrains &&
        <div className="fetching-trains-indicator">Fetching trains...</div>
      }
    </div>
  );
};

export default Header;
