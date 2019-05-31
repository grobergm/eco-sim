import React from 'react';
import collonization from '../../../Populations/img/forb/forb4.svg';
import competition from '../../../Populations/img/shrub/shrub6.svg';

import Players from '../Players/Players';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import { 
	changeView,
 	addPlayer,
 	setGameLength,
 	setMapSize
 } from '../../redux/actionCreator';

 import { makeGrid } from '../../../Environment/redux/actionCreator'


function Setup({dispatch, game}){
	const choiceGrid={
		display:'grid',
		gridTemplateColumns:'50% 50%',
		gridTemplateRows:'25% 50% 25%',
		textAlign:'center',
		backgroundColor:'#e6ff99',
		width:'100%',
	}
	const fullRow={
		gridColumn:'span 2'
	}
	const choices={
		display:'flex'
	}
	const inputStyle={
		padding:'0.5rem',
		width:'60%'
	}
	const buttonStyle={
		width:'30%',
		padding:'0.5rem'
	}
	const gameSetup={
		display:'grid',
		justifyContent:'center',
		gridGap:'1rem',
		gridTemplateRows:'repeat(5,1fr)',
		padding:'2rem'
	}
	const gameSetupInput={
		textAlign:'center',
		border:'none',
		padding:'0.5rem',
		margin:'0.5rem'
	}
// refs
	let _forbNameInput;
	let _shrubNameInput;
	let _gameLength;
	let _mapSize;
	let _difficulty;
	let _rock;
	let _water;

	const addForb=()=>{
		if(_forbNameInput.value){
			let newPlayer={
				id:v4(),
				name:_forbNameInput.value,
				species:'forb',
				seed:4
			}
			dispatch(addPlayer(newPlayer));
			_forbNameInput.value='';
		}
	}
	const addShrub=()=>{
		if(_shrubNameInput.value){
			let newPlayer={
				id:v4(),
				name:_shrubNameInput.value,
				species:'shrub',
				seed:2
			}
			dispatch(addPlayer(newPlayer));
			_shrubNameInput.value='';
		}
	}

	const distributeResources=()=>{
		console.log(_difficulty.value)
		let rock;
		let water;
		switch(_difficulty.value){
			case 'easy':
				console.log('easy selected')
				rock=0.1;
				water=0.4;
				break;
			case 'medium':
				rock=0.3;
				water=0.3;
				break;
			case 'hard':
			console.log('hard selected')
				rock=0.4;
				water=0.2;
				break;
		}
		dispatch(makeGrid(parseInt(_mapSize.value),water,rock))
	}

	const setGameStats=()=>{
		if(game.players.length){
		dispatch(setMapSize(parseInt(_mapSize.value)));
		distributeResources();
		dispatch(setGameLength(parseInt(_gameLength.value)));
		dispatch(changeView('start'));
		}
	}
	return (
		<div>
			<div>
				<div style={choices}>
					<div style={choiceGrid}>
						<h1 style={fullRow}>Forb</h1>
						<div>
							<p>Scatter your seeds</p>
							<p>Be the first to arrive</p>
							<p>Although you are small</p>
							<p>Your numbers are endless</p>
						</div>
						<img style={{width:'100%'}} src={collonization} />
						<div style={fullRow}>
							<input
							style={inputStyle}
							type="text"
							id="playerName"
							placeholder="Name"
							ref={(input)=>{_forbNameInput=input}}
							/>
							<button style={buttonStyle} onClick={addForb}>Add</button>
						</div>						
					</div>
					<div style={choiceGrid}>
						<h1 style={fullRow}>Shrub</h1>
						<div>
							<p></p>
							<p>Dolar Sit amet</p>
							<p>Something something</p>
						</div>
						<img style={{width:'100%'}} src={competition} />
						<div style={fullRow}>
							<input
							style={inputStyle}
							type="text"
							id="playerName"
							placeholder="Name"
							ref={(input)=>{_shrubNameInput=input}}
							/>
							<button style={buttonStyle} onClick={addShrub}>Add</button>
						</div>
					</div>
				</div>
			</div>
			<Players />
			<div style={gameSetup} >
				<div>
					<label htmlFor='gameLength'>Game Length:</label>
					<input
					style={gameSetupInput}
					type="number"
					id="gameLength"
					defaultValue="10"
					min="5"
					max="25"
					step="5"
					ref={(input)=>{_gameLength=input}}
					/>
				</div>
				<div>
					<label htmlFor='mapSize'>Map Size</label>
					<input
					style={gameSetupInput}
					type="number"
					id="mapSize"
					defaultValue="10"
					min="5"
					max="25"
					step="5"
					ref={(input)=>{_mapSize=input}}
					/>
				</div>
				<div>
					<label htmlFor='difficulty'>Water Level:</label>
					<select style={gameSetupInput} 
					ref={(input)=>{_difficulty=input}}>
						<option value="easy">easy</option>
						<option value="medium">medium</option>
						<option value="hard">hard</option>
					</select>
				</div>
				<button onClick={setGameStats}> Start Game </button>
			</div>
		</div>
	)
}

const mapStateToProps=state=>{
	return{
		game:state.game
	}
}

export default connect(mapStateToProps)(Setup);