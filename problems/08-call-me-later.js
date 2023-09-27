class CallCenter{
	constructor(name){
		this.name = name; //The this.name is the instantiation
		//set the name property of a newly instantiated instance to the name argument
	}
	sayHello = () => {  //We locked in the context for sayHello
		console.log(`Hello this is ${this.name}`)
	}
	callMeLater(delay){
		setTimeout(this.sayHello, delay); //Context of sayHello method when invoked is the CallCenter instance?
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}
