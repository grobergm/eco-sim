import React from 'react';

function Player(props){
	const pStyle={
		padding:'1rem',
	}
	const name={
		color:'white',
		backgroundColor:props.player.color,
		textAlign:'center',
		padding:'0.5rem',
		borderRadius:'0.25rem',
	}
	return(
		<div style={pStyle}>
			<h3 style={name}>{props.player.name}</h3>
			{
				props.view==='game-end' ? <p>Score: {props.onScore(props.player)}</p>:null
			}
			<ul style={{paddingLeft:'0.25rem'}}>
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