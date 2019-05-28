import React from 'react';
import Habitat from './Habitat'
import { makeGrid } from '../redux/actionCreator';
import { connect } from 'react-redux';

function Environment(props){
	console.log(props)
	// function randomize(max){
	// 	return Math.floor(Math.random()*max)
	// }

	// function makeHabitatArray(size){
	// 	const habitatArray=[];
	// 	const substrates=['water','soil','soil','rocks'];
	// 	const plants=[{type:'forb',leaves:0,roots:1,player:'Mark'},
	// 								{type:'forb',leaves:0,roots:1,player:'Jill'},
	// 								{type:'shrub',leaves:0,roots:1,player:'Jen'}]
	// 	for(let i=0;i<size;i++){
	// 		const habitat={};
	// 		habitat.substrate=substrates[Math.floor(Math.random()*substrates.length)];
	// 		habitat.plant=null;
	// 		if(habitat.substrate==='soil'){
	// 			habitat.plant=Object.assign({},plants[Math.floor(Math.random()*plants.length)],{leaves:randomize(3),roots:randomize(3)+1});
	// 		} 
	// 		habitatArray.push(habitat)
	// 	}
	// 	return habitatArray;
	// }
	// const habitatArray=makeHabitatArray(100);
	const grid={
		display:'grid',
		gridTemplateColumns:'repeat(10,1fr)',
		gridTemplateRows:'repeat(10,1fr)',
	}
	return (
		<div style={grid}>
			{
				Object.keys(props.environment).map((id,index)=>{
					
					return <Habitat 
										key={index}
										habitat={props.environment[id]}
										/>
				})
			}
		</div>
	)
}

const mapStateToProps=state=>{
	return {...state}
}

export default connect(mapStateToProps)(Environment)