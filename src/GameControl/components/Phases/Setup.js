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
			playerColor:'#009933',
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
				},
				environment:{
					rocky:{
						value:false,
						selected:false,
					},
					wetland:{
						value:false,
						selected:false,
					},
					airMoisture:{
						value:false,
						selected:false,
					}
				}
			},
			gameLength:10,
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
				color:this.state.playerColor,
				seed:3,
				genetics:this.state.genetics,
				adaptations:this.state.genetics.adaptations
			}
			this.props.dispatch(addPlayer(newPlayer));
			this.setState({playerName:''})
			this.handleGeneticsReset();
		}
	}

	handleGeneticsSelect(organ,key,value){

		if(this.state.genetics.adaptations.length<3
			&& !this.state.genetics[organ][key].selected){
			const newGenetics={
				...this.state.genetics,
				[organ]:{
					...this.state.genetics[organ],
					[key]:{
						value:value,
						selected:true
					}
				},
				adaptations:[...this.state.genetics.adaptations,organ+" "+key]
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
			},
			environment:{
					rocky:{
						value:false,
						selected:false,
					},
					wetland:{
						value:false,
						selected:false,
					},
					airMoisture:{
						value:false,
						selected:false,
					}
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

	distributeResources(size){
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
		this.props.dispatch(makeGrid(size,water,rock))
	}

	setGameStats(){
		let length=parseInt(this.state.gameLength);
		let size=parseInt(this.state.mapSize);
		if(this.props.game.players.length){
			if(length>20||length<5){
				length=10;
			}
			if(size>20||size<5){
				size=10;
			}
			this.props.dispatch(setMapSize(size));
			this.distributeResources(size);
			this.props.dispatch(setGameLength(length));
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
	}
	const gameSetupInput={
		textAlign:'center',
		border:'none',
		padding:'0.5rem',
		margin:'0.5rem'
	}

	const geneGrid={
		display:'grid',
		gridTemplateColumns:'repeat(4,1fr)',
		textAlign:'center'
	}

	const specialButtons={
		filter:'invert(100%)',
		padding:'1rem',
		margin:'1rem'
	}

		return (
		<div style={gameSetup}>
			<h1>Game Setup</h1>
			<h2>Create A Plant Species</h2>
			<div>
				<label htmlFor='playerColor'><h3>Choose Unique Color</h3></label>
				<input
				type="color"
				id="playerColor"
				name="playerColor"
				value={this.state.playerColor}
				onChange={this.handleInputChange}
				 />
				<div>
					<label htmlFor='playerName'><h3>Name</h3></label>
					<input
					type="text"
					name="playerName"
					id="playerName"
					placeholder="Enter Species Name"
					value={this.state.playerName}
					onChange={this.handleInputChange}
					/>
				</div>
			</div>
			<h3>Choose Three Adaptations</h3>
			<div style={geneGrid}>
				<h3>Leaves</h3>
				<h3>Roots</h3>
				<h3>Flowers</h3>
				<h3>Environment</h3>
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
					data={this.state.genetics.environment.rocky}
					selectValue={true}
					organ='environment' 
					attribute='rocky' />
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
					data={this.state.genetics.environment.wetland}
					selectValue={true}
					organ='environment' 
					attribute='wetland' />
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
				<GeneSelection 
					onSelect={this.handleGeneticsSelect} 
					data={this.state.genetics.environment.airMoisture}
					selectValue={true}
					organ='environment' 
					attribute='airMoisture' />
			</div>
			
			<button style={specialButtons} onClick={this.handleAddPlayer}>Add Species</button>

			<Players />
			<h2>Set Game Attributes</h2>
			<div style={gameStats} >
				<div>
					<label htmlFor='gameLength'><h3>Game Length</h3></label>
					<input
					style={gameSetupInput}
					type="number"
					id="gameLength"
					name="gameLength"
					defaultValue="10"
					min="5"
					max="20"
					step="5"
					onChange={this.handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='mapSize'><h3>Map Size</h3></label>
					<input
					style={gameSetupInput}
					type="number"
					id="mapSize"
					name="mapSize"
					defaultValue="10"
					min="5"
					max="20"
					step="5"
					onChange={this.handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='difficulty'><h3>Resource</h3></label>
					<OptionButton level='scarce' selected={this.state.resourceLevel} onSelect={this.handleSelect} />
					<OptionButton level='balanced' selected={this.state.resourceLevel} onSelect={this.handleSelect} />
					<OptionButton level='abundant' selected={this.state.resourceLevel} onSelect={this.handleSelect} />
				</div>
			</div>
				<button style={specialButtons} onClick={this.setGameStats}>Start Game</button>

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