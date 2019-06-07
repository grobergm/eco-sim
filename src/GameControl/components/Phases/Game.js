import React, { Component } from 'react';
import Environment from '../../../Environment/components/Environment';
import PlayerDetail from '../Players/PlayerDetail';

class Game extends Component{
	constructor(){
		super();
		this.state={
			menuOpen:true
		}
		this.handleToggleMenu=this.handleToggleMenu.bind(this)
	}

	handleToggleMenu(){
		this.setState({menuOpen:!this.state.menuOpen})
	}

	render(){
		return (
		<div>
			<Environment />
			<PlayerDetail 
			onToggleMenu={this.handleToggleMenu} 
			open={this.state.menuOpen} />
		</div>
		)
	}
	
}

export default Game