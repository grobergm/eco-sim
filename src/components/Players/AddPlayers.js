import React from 'react';
import collonization from '../../img/plants/forb/forb2.png';
import competition from '../../img/plants/shrub/shrub4.png';


function AddPlayers(props){
	const choiceGrid={
		display:'grid',
		gridTemplateColumns:'50% 50%',
		textAlign:'center'
	}
	const fullRow={
		gridColumn:'span 2',
	}
	const choices={
		display:'flex',
		justifyContent:'space-around'
	}

	const newPlayer={
		display:'flex',
		justifyContent:'center'
	}
	return (
		<div>
			<div>
				<div style={choices}>
					<div style={choiceGrid}>
						<h1 style={fullRow}>Collonization Strategy</h1>
						<div>
							<p>Lorem Ipsum</p>
							<p>Dolar Sit amet</p>
							<p>Something something</p>
						</div>
						<img style={{width:'100%'}} src={collonization} />
						<button style={fullRow}>Select</button>
					</div>
					<div style={choiceGrid}>
						<h1 style={fullRow}>Competition Strategy</h1>
						<div>
							<p>Lorem Ipsum</p>
							<p>Dolar Sit amet</p>
							<p>Something something</p>
						</div>
						<img style={{width:'100%'}} src={competition} />
						<button style={fullRow}>Select</button>
					</div>
				</div>
			</div>
			<div style={newPlayer}>
				<input
				type="text"
				id="playerName"
				placeholder="Name"
				/>
				<button>Add Player</button>
			</div>
		</div>
	)
}

export default AddPlayers