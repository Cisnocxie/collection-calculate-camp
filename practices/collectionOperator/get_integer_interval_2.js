'use strict';

function get_integer_interval_2(number_a, number_b) {
  let result = [];
  if (number_a < number_b) {
    if (number_a % 2 === 0) {
      result.push(number_a);
    } else {
      result.push(number_a + 1);
    }
    while (result[result.length - 1] + 2 <= number_b) {
      result.push(result[result.length - 1] + 2);
    }
  } else if (number_a > number_b) {
    result = get_integer_interval_2(number_b, number_a).reverse();
  } else {
    if (number_a % 2 === 0) {
      result.push(number_a);
    }
  }
  return result;
}

module.exports = get_integer_interval_2;
