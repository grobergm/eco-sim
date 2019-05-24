import React from 'react';
import Habitat from './Habitat'

function Environment(props){
	function randomize(max){
		return Math.floor(Math.random()*max)
	}

	function makeHabitatArray(size){
		const habitatArray=[];
		const substrates=['water','soil','soil','rocks'];
		const plants=[{type:'forb',leaves:0,roots:1,player:'Mark'},
									{type:'forb',leaves:0,roots:1,player:'Jill'},
									{type:'shrub',leaves:0,roots:1,player:'Jen'}]
		for(let i=0;i<size;i++){
			const habitat={};
			habitat.substrate=substrates[Math.floor(Math.random()*substrates.length)];
			habitat.plant=null;
			if(habitat.substrate==='soil'){
				habitat.plant=Object.assign({},plants[Math.floor(Math.random()*plants.length)],{leaves:randomize(3),roots:randomize(3)+1});
			} 
			habitatArray.push(habitat)
		}
		return habitatArray;
	}
	const habitatArray=makeHabitatArray(100);
	const grid={
		display:'grid',
		gridTemplateColumns:'repeat(10,1fr)',
		gridTemplateRows:'repeat(10,1fr)',
	}
	return (
		<div style={grid}>
			{
				habitatArray.map((habitat,index)=>{
					return <Habitat 
										key={index}
										habitat={habitat}
										turn={props.turn} />
				})
			}
		</div>
	)
}

export default Environment