import React from 'react';

function Player(props){
	const pStyle={
		padding:'1rem',
	}
	return(
		<div style={pStyle}>
			<h3>{props.player.name}</h3>
			{
				props.view==='game-end' ? <p>Score: {props.onScore(props.player)}</p>:null
			}
			<ul style={{listStyle:'none'}}>
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