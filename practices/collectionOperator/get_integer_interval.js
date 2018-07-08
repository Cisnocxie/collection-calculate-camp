'use strict';

function get_integer_interval(number_a, number_b) {
  let result = [];
  if (number_a <= number_b) {
    for (let i = 0; i <= number_b - number_a; i++) {
      result.push(number_a + i);
    }
  } else {
    result = get_integer_interval(number_b, number_a).reverse();
  }
  return result;
}

module.exports = get_integer_interval;

