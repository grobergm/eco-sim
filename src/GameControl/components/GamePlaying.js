import React from 'react';
import Environment from '../../Environment/components/Environment';
import Players from '../../Players/components/Players';
import PlayerDetail from '../../Players/components/PlayerDetail';

function GamePlaying(props){

	return (
		<div>
			<Players turn='Mark' />
			<Environment turn='Mark' />
			<PlayerDetail />
		</div>
	)
}

export default GamePlaying