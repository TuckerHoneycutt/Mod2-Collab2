// Your code here
// __problems/02-calculator.js

class Calculator {
	constructor() {
	  this.total = 0;
	}

	add(num) {
	  this.total += num;
	  return this.total;
	}

	subtract(num) {
	  this.total -= num;
	  return this.total;
	}

	divide(num) {
	  if (num === 0) {
		throw new Error("Division by zero is not allowed");
	  }
	  this.total /= num;
	  return this.total;
	}

	multiply(num) {
	  this.total *= num;
	  return this.total;
	}
  }

  module.exports = Calculator;


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}
