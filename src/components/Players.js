import React from 'react';

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
						<div key={index}>
							<p>Player{index+1}: {player.name}</p>
							<p>{player.species}</p>
						</div>
						)
				})
			}
		</div>
	)
}

export default Players;