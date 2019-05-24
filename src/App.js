import React from 'react';
import Intro from './GameControl/components/Intro';
import GameSetup from './GameControl/components/GameSetup';
import GamePlaying from './GameControl/components/GamePlaying';
import GameEnd from './GameControl/components/GameEnd';


function App() {
  return (
    <div>
      <Intro />
      <GameSetup />
      <GamePlaying />
      <GameEnd />
    </div>
  );
}

export default App;
