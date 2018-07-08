'use strict';

function get_intersection(collection_a, collection_b) {
  let result = [];
  for (let i of collection_b) {
    for (let j of collection_a) {
      if (i === j) {
        result.push(i);
      }
    }
  }
  return result;
}

module.exports = get_intersection;
