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

	let selectedSpecies;
// refs
	let _nameInput;
	let _gameLength;
	let _mapSize;
	let _rock;
	let _water
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

	const setGameStats=()=>{
		dispatch(setMapSize(parseInt(_mapSize.value)));
		dispatch(makeGrid(parseInt(_mapSize.value),_water.value,_rock.value))
		dispatch(setGameLength(parseInt(_gameLength.value)));
		dispatch(changeView('start'));
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
			<div>
			<label for='gameLength'>Game Length:</label>
				<input
				type="number"
				id="gameLength"
				defaultValue="10"
				min="5"
				max="25"
				step="5"
				ref={(input)=>{_gameLength=input}}
				/>
			<label for='mapSize'>Map Size</label>
				<input
				type="number"
				id="mapSize"
				defaultValue="10"
				min="5"
				max="25"
				step="5"
				ref={(input)=>{_mapSize=input}}
				/>
			<label for='water'>Water Level:</label>
				<input
				type="number"
				id="water"
				defaultValue="0.3"
				min="0.1"
				max="0.8"
				step="0.1"
				ref={(input)=>{_water=input}}
				/>
			<label for='rock'>Rock Level:</label>
				<input
				type="number"
				id="rock"
				defaultValue="0.2"
				min="0.1"
				max="0.5"
				step="0.1"
				ref={(input)=>{_rock=input}}
				/>
				
			</div>
			<button onClick={setGameStats}> Start Game </button>
			<Players />
		</div>
	)
}


export default connect()(Setup);