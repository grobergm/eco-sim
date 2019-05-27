import React from 'react';
import Environment from '../../../Environment/components/Environment';
import Players from '../Players/Players';
import PlayerDetail from '../Players/PlayerDetail';

function Game(props){

	return (
		<div>
			<Players turn='Mark' />
			<Environment turn='Mark' />
			<PlayerDetail />
		</div>
	)
}

export default Game