import React from 'react';

function Player(props){
	const pStyle={
		padding:'1rem',
	}
	return(
		<div style={pStyle}>
			<p>{props.player.name}</p>
			<ul>
			{
				props.player.genetics.adaptations.map((adaptation,i)=>{
					return <li key={i}>{adaptation}</li>
				})
			}
			</ul>
		</div>
	)
}

export default Player;