import React from 'react';
import Intro from './GameControl/components/Phases/Intro';
import GameSetup from './GameControl/components/Phases/GameSetup';
import GamePlaying from './GameControl/components/Phases/GamePlaying';
import GameEnd from './GameControl/components/Phases/GameEnd';


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
