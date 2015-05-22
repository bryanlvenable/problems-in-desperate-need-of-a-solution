/*! commonCharacters v0.0.0 - MIT license */
'use strict';

var commonCharacters = function (firstString, secondString) {
  var results = [];
  var firstArray = firstString.split('');
  var secondArray = secondString.split('');

  // Subroutine to remove character from array
  var remove = function (removeThis, fromThis) {

    // Iterate over fromThis
      // If removeThis is equal to element
        // Remove that element from fromThis
    // Return fromThis

    for (var i=0; i<fromThis.length; i++) {
      if (removeThis === fromThis[i]) {
        fromThis.splice(i, 1);
      }
    }
    return fromThis;
  };

  // Subroutine predicate to search if an element is in an array
  var search = function (ifThis, inThis) {

    // Iterate over inThis
      // If ifThis is equal to element
        // Return true
    // Return false

    for (var i=0; i<inThis.length; i++) {
      if (ifThis === inThis[i]) {
        // console.log('Found something in search', ifThis, 'in', inThis);
        return true;
      }
    }
    return false;
  }

  // Iterate over the shortest of the two arrays
    // Search for first element in firstArray in secondArray
      // If found
        // Add element to results
        // Remove element from both strings
    // Search for first element in secondArray in firstArray
      // If found
        // Add element to results
        // Remove element from both strings
  var counter = 0;
  // for (var i=0; i<Math.min(firstArray.length, secondArray.length); i++) {
  while (firstArray.length > 0 && secondArray.length > 0) {
    if (search(firstArray[0], secondArray)) {
      results.push(firstArray[0]);
      secondArray = remove(firstArray[0], secondArray);
      firstArray = remove(firstArray[0], firstArray);
    } else {
      firstArray = remove(firstArray[0], firstArray);
    }
    if (search(secondArray[0], firstArray)) {
      results.push(secondArray[0]);
      firstArray = remove(secondArray[0], firstArray);
      secondArray = remove(secondArray[0], secondArray);
    } else {
      secondArray = remove(secondArray[0], secondArray);
    }
  }
  // console.log('Search test', search('c',['a','b','c']));
  return results.join('');
};