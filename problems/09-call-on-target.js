function callOnTarget(func, obj1, obj2) {
  return func.call(obj1, obj2);
}


const cat ={
  name: "Breakfast"
}

const mouse = {
  name: "Jerry"
}

function greet(other){
  return "I'm " + this.name + " Nice to meet you, " + other.name
}

let test1 = callOnTarget(greet, cat, mouse);
console.log(test1);


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
