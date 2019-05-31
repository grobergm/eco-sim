import React from 'react';

function Intro({setup}){

	const panel={
		display:'flex',
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center',
		height:'100vh',
		width:'100vw',
	}

	return (
	<div style={panel}>
		<h1>EcoSim</h1>
		<button onClick={setup}>Start Game >></button>
	</div>
	)
}

export default Intro