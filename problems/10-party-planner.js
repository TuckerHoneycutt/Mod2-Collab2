class PartyPlanner{
	constructor(){
		this.guestList = [];// It instantiates it inside the class
	}
	addToGuestList(name){
		this.guestList.push(name);
	}
	throwParty(){
		if(this.guestList.length === 0){ // This is if there are no people coming to the party
			return "Gotta add people to the guest list"
		}else{//This is if there are 1 or more people coming to the party
			return `Welcome to the party ${this.guestList.join(' and ')}`
		}
	}
}



/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
