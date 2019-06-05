import React, { Component } from 'react';
import collonization from '../../../Populations/img/forb/forb4.svg';
import competition from '../../../Populations/img/shrub/shrub6.svg';

import Players from '../Players/Players';
import OptionButton from './OptionButton';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import { 
	changeView,
 	addPlayer,
 	setGameLength,
 	setMapSize
 } from '../../redux/actionCreator';

 import { makeGrid } from '../../../Environment/redux/actionCreator'


class Setup extends Component{
	constructor(props){
		super(props);
		this.state={
			forbNameInput:'',
			shrubNameInput:'',
			gameLength:20,
			mapSize:10,
			resourceLevel:'balanced'
		}
		this.handleSelect=this.handleSelect.bind(this);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.addForb=this.addForb.bind(this)
		this.addShrub=this.addShrub.bind(this)
		this.setGameStats=this.setGameStats.bind(this)
	}


	addForb(){
		if(this.state.forbNameInput){
			let newPlayer={
				id:v4(),
				name:this.state.forbNameInput,
				seed:3,
				score:3,
				species:{
					name:'forb',
					leafLimit:3,
					rootLimit:3,
					seedProduction:3,
				}
			}
			this.props.dispatch(addPlayer(newPlayer));
			this.setState({forbNameInput:''})
		}
	}

	addShrub(){
		if(this.state.shrubNameInput){
			let newPlayer={
				id:v4(),
				name:this.state.shrubNameInput,
				score:2,
				seed:2,
				species:{
					name:'shrub',
					leafLimit:5,
					rootLimit:5,
					seedProduction:2,
				}
			}
			this.props.dispatch(addPlayer(newPlayer));
			this.setState({shrubNameInput:''})
		}
	}

	handleSelect(level){
		this.setState({resourceLevel:level})	
	}

	handleInputChange(event){
		this.setState({[event.target.name]:event.target.value})
	}

	distributeResources(){
		let rock;
		let water;
		switch(this.state.resourceLevel){
			case 'abundant':
				rock=0.1;
				water=0.4;
				break;
			case 'balanced':
				rock=0.3;
				water=0.3;
				break;
			case 'scarce':
				rock=0.4;
				water=0.2;
				break;
			default :
				rock=0.1;
				water=0.4;
		}
		this.props.dispatch(makeGrid(parseInt(this.state.mapSize),water,rock))
	}

	setGameStats(){
		if(this.props.game.players.length){
		this.props.dispatch(setMapSize(parseInt(this.state.mapSize)));
		this.distributeResources();
		this.props.dispatch(setGameLength(parseInt(this.state.gameLength)));
		this.props.dispatch(changeView('start'));
		}
	}


	render(){

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
		return (
		<div>
			<div>
				<div style={choices}>
					<div style={choiceGrid}>
						<h1 style={fullRow}>Forb</h1>
						<div>
							<p>Scatter your seeds</p>
							<p>Be the first to arrive</p>
							<p>You won't live long</p>
							<p>But your children will thrive</p>
						</div>
						<img style={{width:'100%'}} src={collonization} alt="forb" />
						<div style={fullRow}>
							<input
							style={inputStyle}
							type="text"
							name="forbNameInput"
							placeholder="Name"
							value={this.state.forbNameInput}
							onChange={this.handleInputChange}
							/>
							<button style={buttonStyle} onClick={this.addForb}>Add</button>
						</div>						
					</div>
					<div style={choiceGrid}>
						<h1 style={fullRow}>Shrub</h1>
						<div>
							<p>Find the right spot</p>
							<p>Take your time to grow</p>
							<p>Live a long life</p>
							<p>Many seeds you will sow</p>
						</div>
						<img style={{width:'100%'}} src={competition} alt="shrub"/>
						<div style={fullRow}>
							<input
							style={inputStyle}
							type="text"
							name="shrubNameInput"
							placeholder="Name"
							value={this.state.shrubNameInput}
							onChange={this.handleInputChange}
							/>
							<button style={buttonStyle} onClick={this.addShrub}>Add</button>
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
					name="gameLength"
					defaultValue="20"
					min="10"
					max="30"
					step="5"
					onChange={this.handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='mapSize'>Map Size</label>
					<input
					style={gameSetupInput}
					type="number"
					id="mapSize"
					name="mapSize"
					defaultValue="10"
					min="5"
					max="25"
					step="5"
					onChange={this.handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='difficulty'>Resource Level:</label>
					<OptionButton level='abundant' selected={this.state.resourceLevel} onSelect={this.handleSelect} />
					<OptionButton level='balanced' selected={this.state.resourceLevel} onSelect={this.handleSelect} />
					<OptionButton level='scarce' selected={this.state.resourceLevel} onSelect={this.handleSelect} />
				</div>
				<button onClick={this.setGameStats}> Start Game </button>
			</div>
		</div>
	)
	}
	
}

const mapStateToProps=state=>{
	return{
		game:state.game
	}
}

export default connect(mapStateToProps)(Setup);