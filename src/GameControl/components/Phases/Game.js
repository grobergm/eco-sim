import React from 'react';
import Environment from '../../../Environment/components/Environment';
import PlayerDetail from '../Players/PlayerDetail';

function Game(props){

	return (
		<div>
			<Environment />
			<PlayerDetail />
		</div>
	)
}

export default Game