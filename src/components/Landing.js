import React from 'react';

function Landing(props){

	const panel={
		display:'flex',
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center',
		height:'100vh',
		width:'100vw',
	}

	return (
		<div>
			<div style={panel}>
				<h1>Ecosystem Simulator</h1>
			</div>
			<div style={panel}>
				<p>Have you ever wondered</p>
				<p>What it's like to be a plant?</p>
				<p>Why they grow where they do?</p>
			</div>
			<div style={panel}>
				<h2>Environment</h2>
			</div>
			<div style={panel}>
				<h2>Competition</h2>
			</div>
			<div style={panel}>
				<h2>Evolution</h2>
			</div>
			<div style={panel}>
				<p>These forces affect where plants can grow</p>
				<p>But they occur too gradually to observe...</p>
			</div>
			<div style={panel}>
				<p>Until now...</p>
				<button>Start Game >></button>
			</div>
		</div>
	)
}

export default Landing