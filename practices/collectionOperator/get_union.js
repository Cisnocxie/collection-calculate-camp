'use strict';

let get_intersection = require('./get_intersection.js');
function get_union(collection_a, collection_b) {
  let result = collection_a;
  let intersection = get_intersection(collection_a, collection_b);
  for (let i of collection_b) {
    result.push(i);
    for (let j of intersection) {
      if (i === j) {
        result.pop();
        break;
      }
    }
  }
  return result;
}

module.exports = get_union;

