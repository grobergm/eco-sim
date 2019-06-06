import React, { Component } from 'react';
import collonization from '../../../Populations/img/forb/forb4.svg';
import competition from '../../../Populations/img/shrub/shrub6.svg';

import Players from '../Players/Players';
import OptionButton from './OptionButton';
import GeneSelection from './GeneSelection';
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
			playerName:'',
			genetics:{
			adaptations:[],
			leaves:{
				min:{
					value:1,
					selected:false
				},
				max:{
					value:3,
					selected:false
				},
				cost:{
					value:2,
					selected:false
				},
			},
			roots:{
				min:{
					value:1,
					selected:false
				},
				max:{
					value:3,
					selected:false
				},
				cost:{
					value:2,
					selected:false
				},
			},
			flowers:{
				minLeaves:{
					value:3,
					selected:false
				},
				seed:{
					value:1,
					selected:false
				},
				cost:{
					value:4,
					selected:false
				},
			}
			},
			gameLength:20,
			mapSize:10,
			resourceLevel:'balanced'
		}
		this.handleSelect=this.handleSelect.bind(this);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleGeneticsReset=this.handleGeneticsReset.bind(this);
		this.handleGeneticsSelect=this.handleGeneticsSelect.bind(this);
		this.handleAddPlayer=this.handleAddPlayer.bind(this);
		this.setGameStats=this.setGameStats.bind(this);
	}

	handleAddPlayer(){
		if(this.state.playerName&&this.state.genetics.adaptations.length===3){
			let newPlayer={
				id:v4(),
				name:this.state.playerName,
				seed:3,
				genetics:this.state.genetics,
				adaptations:this.state.adaptations
			}
			this.props.dispatch(addPlayer(newPlayer));
			this.setState({playerName:''})
			this.handleGeneticsReset();
		}
	}

	handleGeneticsSelect(organ,key,value){
		if(this.state.genetics.adaptations.length<3){
			const newGenetics={
				...this.state.genetics,
				adaptations:[...this.state.genetics.adaptations,organ+" "+key],
				[organ]:{
					...this.state.genetics[organ],
					[key]:{
						value:value,
						selected:true
					}
				}
			}
		this.setState({genetics:newGenetics})
		}
	}

	handleGeneticsReset(){
		let plantDefault={
			adaptations:[],
			leaves:{
				min:{
					value:1,
					selected:false
				},
				max:{
					value:3,
					selected:false
				},
				cost:{
					value:2,
					selected:false
				},
			},
			roots:{
				min:{
					value:1,
					selected:false
				},
				max:{
					value:3,
					selected:false
				},
				cost:{
					value:2,
					selected:false
				},
			},
				flowers:{
				minLeaves:{
					value:3,
					selected:false
				},
				seed:{
					value:1,
					selected:false
				},
				cost:{
					value:4,
					selected:false
				},
			}
		}
		this.setState({genetics:plantDefault});
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

	
	const inputStyle={
		padding:'0.5rem',
		width:'60%'
	}
	const gameSetup={
		display:'grid',
		justifyContent:'center',
	}
	const gameStats={
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

	const geneGrid={
		display:'grid',
		gridTemplateColumns:'repeat(3,1fr)',
		textAlign:'center'
	}

		return (
		<div style={gameSetup}>
			<h1>Choose three adaptations</h1>
			<div style={geneGrid}>
				<h2>Leaves</h2>
				<h2>Roots</h2>
				<h2>Flowers</h2>
				<GeneSelection 
					onSelect={this.handleGeneticsSelect} 
					data={this.state.genetics.leaves.max}
					selectValue={5}
					organ='leaves' 
					attribute='max' />
				<GeneSelection 
					onSelect={this.handleGeneticsSelect} 
					data={this.state.genetics.roots.max}
					selectValue={5}
					organ='roots' 
					attribute='max' />
				<GeneSelection 
					onSelect={this.handleGeneticsSelect} 
					data={this.state.genetics.flowers.seed}
					selectValue={2}
					organ='flowers' 
					attribute='seed' />
				<GeneSelection 
					onSelect={this.handleGeneticsSelect} 
					data={this.state.genetics.leaves.min}
					selectValue={2}
					organ='leaves' 
					attribute='min' />
				<GeneSelection 
					onSelect={this.handleGeneticsSelect} 
					data={this.state.genetics.roots.min}
					selectValue={2}
					organ='roots' 
					attribute='min' />
				<GeneSelection 
					onSelect={this.handleGeneticsSelect} 
					data={this.state.genetics.flowers.minLeaves}
					selectValue={2}
					organ='flowers' 
					attribute='minLeaves' />
				<GeneSelection 
					onSelect={this.handleGeneticsSelect} 
					data={this.state.genetics.leaves.cost}
					selectValue={1}
					organ='leaves' 
					attribute='cost' />
				<GeneSelection 
					onSelect={this.handleGeneticsSelect} 
					data={this.state.genetics.roots.cost}
					selectValue={1}
					organ='roots' 
					attribute='cost' />
				<GeneSelection 
					onSelect={this.handleGeneticsSelect} 
					data={this.state.genetics.flowers.cost}
					selectValue={2}
					organ='flowers' 
					attribute='cost' />
			</div>
			<div>
				<input
				type="text"
				name="playerName"
				placeholder="Enter Your Name"
				value={this.state.playerName}
				onChange={this.handleInputChange}
				/>
				<button onClick={this.handleAddPlayer}>Add</button>
			</div>

			<Players />
			<div style={gameStats} >
				<div>
					<label htmlFor='gameLength'>Game Length</label>
					<input
					style={gameSetupInput}
					type="number"
					id="gameLength"
					name="gameLength"
					defaultValue="10"
					min="5"
					max="25"
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
					<label htmlFor='difficulty'>Resource</label>
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