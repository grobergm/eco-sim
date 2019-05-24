import React from 'react';
import AddPlayers from './Players/AddPlayers';
import Environment from './Environment';
import Players from './Players/Players';
import PlayerDetail from './Players/PlayerDetail';

function Game(props){

	return (
		<div>
			<AddPlayers />
			<Players turn='Mark' />
			<Environment turn='Mark' />
			<PlayerDetail />
		</div>
	)
}

export default Game