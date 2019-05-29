export const addOrganism=(playerID,location,organism)=>{
	return {
		type:'ADD_ORGANISM',
		player:playerID,
		location:location,
		organism:organism
	}
}