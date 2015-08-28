function array(a) {
  return [].slice.call(a)
}
function sum(a, b) {
  return a + b
}

module.exports = function add() {
  var args = array(arguments)
  function f() { return add.apply(null, args.concat(array(arguments))) }
  f.valueOf = function() { return args.reduce(sum, 0) }
  return f;
}