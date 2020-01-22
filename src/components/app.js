import React from 'react';
import { hot } from 'react-hot-loader';
import { useSelector } from 'react-redux';
import Mapview from 'components/mapview/mapview';
import ControlPanel from 'components/controlPanel/controlPanel';
import Header from 'components/header/header';

import './app.scss';

const App = () => {
  const mapReady = useSelector(state => state.mapview.state.ready);
  return (
    <div className="container">
      <Header />
      <Mapview />
      {mapReady && <ControlPanel />}
    </div>
  );
};

export default hot(module)(App);
