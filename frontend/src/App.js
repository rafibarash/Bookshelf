import React, { useState } from 'react';
import './App.css';

import Matchup from './components/matchup';
import Teams from './components/teams';

/**
 * Main app component
 */
const App = () => {
  const [tier, setTier] = useState(0);
  return (
    <div className="App">
      <h1>2K Matchups</h1>
      <Matchup tier={tier} />
      <Teams tier={tier} setTier={setTier} />
    </div>
  );
};

export default App;
