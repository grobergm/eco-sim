import React from 'react';

function GeneSelection(props){
	return(
		<div onClick={()=>{this.handleGeneticsSelect('leaves')}}>
			<p>{this.state.genetics.leaves.max}</p>
		</div>
	)
}

export default GeneSelection