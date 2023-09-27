function bindToAnArg(func, arg) {
  return func.bind(0, arg) // Why does this accept literally anything?
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
