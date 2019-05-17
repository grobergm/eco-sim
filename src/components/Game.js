import React from 'react';
import AddPlayer from './AddPlayer';
import Environment from './Environment';
import PlayerMenu from './PlayerMenu';

function Game(props){
	return (
		<div>
			<AddPlayer />
			<Environment />
			<PlayerMenu />
		</div>
	)
}

export default Game