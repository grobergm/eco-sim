export const addOrganism=(playerID,location,organism)=>{
	return {
		player:playerID,
		type:'ADD_ORGANISM',
		location:location,
		organism:organism
	}
}