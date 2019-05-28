import React from 'react';
import collonization from '../../../Populations/img/forb/forb2.png';
import competition from '../../../Populations/img/shrub/shrub4.png';
import Players from '../Players/Players';

import { connect } from 'react-redux';
import { 
	changeView,
 	addPlayer,
 	setGameLength,
 	setMapSize
 } from '../../redux/actionCreator';

 import { makeGrid } from '../../../Environment/redux/actionCreator'


function Setup({dispatch}){
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

	let players;
	let gameLength;
	let _nameInput;
	let selectedSpecies;

	const speciesSelect=(species)=>{
		selectedSpecies=species;
	}

	const addInputPlayer=()=>{
		if(_nameInput.value&&selectedSpecies){
			let newPlayer={
				name:_nameInput.value,
				species:selectedSpecies,
				population:[]
			}
			dispatch(addPlayer(newPlayer));
			selectedSpecies=null;
			_nameInput.value='';
		} else {
			console.log('no',selectedSpecies)
		}
		
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
						<button onClick={()=>{speciesSelect('forb')}} style={fullRow}>Select</button>
					</div>
					<div style={choiceGrid}>
						<h1 style={fullRow}>Competition Strategy</h1>
						<div>
							<p>Lorem Ipsum</p>
							<p>Dolar Sit amet</p>
							<p>Something something</p>
						</div>
						<img style={{width:'100%'}} src={competition} />
						<button onClick={()=>{speciesSelect('shrub')}} style={fullRow}>Select</button>
					</div>
				</div>
			</div>
			<div style={newPlayer}>
				<input
				type="text"
				id="playerName"
				placeholder="Name"
				ref={(input)=>{_nameInput=input}}
				/>
				<button onClick={addInputPlayer}>Add Player</button>
			</div>

			<button onClick={()=>{
				dispatch(setMapSize(10))
				dispatch(makeGrid(10,0.3,0.3))
				dispatch(setGameLength(10));
				dispatch(changeView('start'))
			}}> Start Game </button>
			<Players />
		</div>
	)
}


export default connect()(Setup);