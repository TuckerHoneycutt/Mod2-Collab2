function allTheArgs(func, ...args) {
  return func.bind(func, ...args); //We pass in func into allTheArgs so we 'bind' it to func here
}

// function adder(num){
//   let total = num + 5
//   return total;
// }

const adder = (...nums) => nums.reduce((num, sum) => sum + num);

let addFive = allTheArgs(adder, 5);
console.log(addFive(10));
console.log(addFive(15));
console.log(addFive(20));

// function onePlusTwoPlusThree(sum, 1,3){
//   return sum.bind(sum, 1 + 3);
// }
// obj{}
//a
//a.bind(obj, ...arg)


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
