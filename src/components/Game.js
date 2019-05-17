import React from 'react';
import AddPlayers from './AddPlayers';
import Environment from './Environment';
import Players from './Players';
import PlayerDetail from './PlayerDetail';

function Game(props){
	return (
		<div>
			<AddPlayers />
			<Players />
			<Environment />
			<PlayerDetail />
		</div>
	)
}

export default Game