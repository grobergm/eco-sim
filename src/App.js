import React from 'react';
import Intro from './GameControl/components/Phases/Intro';
import Setup from './GameControl/components/Phases/Setup';
import Game from './GameControl/components/Phases/Game';
import End from './GameControl/components/Phases/End';
import {changeView} from './GameControl/redux/actionCreator';

import { connect } from 'react-redux';

function App({view, dispatch}) {
	const showGamePhase=()=>{
		switch(view){
			case 'game-setup':
				return <Setup />
			case 'game-start':
				return <Game />
			case 'game-end':
				return <End />
			default: 
				return <Intro setup={()=>dispatch(changeView('setup'))} />
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
		view:state.view
	}
}

export default connect(mapStateToProps)(App)
