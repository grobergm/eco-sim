import React from 'react';
import AddPlayers from './AddPlayers';
import Environment from './Environment';
import PlayerMenu from './PlayerMenu';

function Game(props){
	return (
		<div>
			<AddPlayers />
			<Environment />
			<PlayerMenu />
		</div>
	)
}

export default Game