var assert = require('assert');

function s(a) {
  return [].slice.call(a)
}
function plus(a, b) {
  return a + b
}

function add() {
  var args = s(arguments)
  function f() { return add.apply(null, args.concat(s(arguments))) }
  f.valueOf = function() { return args.reduce(plus, 0) }
  return f;
}

function test(a, b) {
  if (a == b) {
    console.log('OK');
  } else {
    console.log(a + ' != ' + b);
  }
}

module.exports = add;

test(add(1, 2), 3);
test(add(3)(4)(), 7);
test(add(3)(4)(5), 12);

var three = add(3);
var four = add(4);
test(three, 3);
test(four, 4);
test(three(5), 8);
test(three(6), 9);
test(three(four), 7);
test(three(four)(three(four)), 14);
