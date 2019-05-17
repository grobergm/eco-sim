import React from 'react';
import Habitat from './Habitat'

function Environment(props){
	function makeHabitatArray(size){
		const habitatArray=[];
		const substrates=['water','soil','rocks'];
		for(let i=0;i<size;i++){
			habitatArray.push({substrate:substrates[Math.floor(Math.random()*substrates.length)]})
		}
		return habitatArray;
	}
	const habitatArray=makeHabitatArray(100);
	const grid={
		display:'grid',
		gridTemplateColumns:'repeat(10,1fr)',
		gridTemplateRows:'repeat(10,1fr)'
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