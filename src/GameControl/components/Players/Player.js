import React from 'react';

function Player(props){
	const pStyle={
		padding:'1rem',
		border:props.turn===props.player.name?'2px solid red':'none'
	}
	return(
		<div style={pStyle}>
			<p>{props.player.name}</p>
			<p>{props.player.species.name}</p>
		</div>
	)
}

export default Player;