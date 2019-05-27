import React from 'react';
import Intro from './GameControl/components/Phases/Intro';
import GameSetup from './GameControl/components/Phases/GameSetup';
import GamePlaying from './GameControl/components/Phases/GamePlaying';
import GameEnd from './GameControl/components/Phases/GameEnd';

import { connect } from 'react-redux';

function App({gameControl}) {
	console.log({gameControl})
	const showGamePhase=()=>{
		switch(gameControl.view){
			case 'intro':
				return <Intro />
			case 'game-setup':
				return <GameSetup />
			case 'game-start':
				return <GamePlaying />
			case 'game-end':
				return <GameEnd />
			default: 
				return <Intro />
		}
	}

	const gamePhase=showGamePhase()
		
  return (
    <div>
      {gamePhase}
    </div>
  );
}

const mapStateToProps=state=>{
	return{
		gameControl:state.gameControl
	}
}

export default connect(mapStateToProps)(App)
