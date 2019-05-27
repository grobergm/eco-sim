import React from 'react';
import Intro from './GameControl/components/Phases/Intro';
import Setup from './GameControl/components/Phases/Setup';
import Game from './GameControl/components/Phases/Game';
import End from './GameControl/components/Phases/End';
import {changeView} from './GameControl/redux/actionCreator';

import { connect } from 'react-redux';

function App({gameControl, dispatch}) {
	console.log({gameControl})
	const showGamePhase=()=>{
		switch(gameControl.view){
			case 'game-intro':
				return <Intro setup={()=>dispatch(changeView('setup'))}  />
			case 'game-setup':
				return <Setup />
			case 'game-start':
				return <Game />
			case 'game-end':
				return <End />
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
