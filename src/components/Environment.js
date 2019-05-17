import React from 'react';
import Habitat from './Habitat'

function Environment(props){
	function makeHabitatArray(size){
		const habitatArray=[];
		const substrates=['water','soil','soil','rocks'];
		const plants=[{type:'forb',leaves:1,roots:1},{type:'forb',leaves:1,roots:1},{type:'shrub',leaves:1,roots:1},null]
		for(let i=0;i<size;i++){
			const habitat={};
			habitat.substrate=substrates[Math.floor(Math.random()*substrates.length)];
			habitat.plant=null;
			if(habitat.substrate==='soil'){
				habitat.plant=plants[Math.floor(Math.random()*plants.length)];
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
										habitat={habitat} />
				})
			}
		</div>
	)
}

export default Environment