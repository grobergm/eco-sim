import React from 'react';
import Player from './Player';

function Players(props){
	const mockPlayers=[
		{
			name:'Mark',
			id:'asdasdsadlkkjdlkajsdlj',
			species:'forb'
		},
		{
			name:'Jen',
			id:'sdsadasdsadasdj',
			species:'shrub'
		},
		{
			name:'Jill',
			id:'alskdasljdlkajl',
			species:'forb'
		}
	]
	const layout={
		display:'flex',
		justifyContent:'space-around'
	}

	return (
		<div style={layout}>
			{
				mockPlayers.map((player,index)=>{
					return (
						<Player 
							key={index} 
							player={player}
							turn={props.turn} />
						)
				})
			}
		</div>
	)
}

export default Players;