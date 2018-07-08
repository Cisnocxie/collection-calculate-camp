'use strict';

let get_integer_interval = require('./get_integer_interval.js');
function get_letter_interval_2(number_a, number_b) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
              'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let result = [];
  for (let i of get_integer_interval(number_a, number_b)) {
    if (i < 27) {
      result.push(alphabet[i - 1]);
    } else {
      result.push(alphabet[parseInt((i - 1) / 26) - 1] + alphabet[(i - 1) % 26]);
    }
  }
  return result;
}

module.exports = get_letter_interval_2;

