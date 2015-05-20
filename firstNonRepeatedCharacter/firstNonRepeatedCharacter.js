/*! firstNonRepeatedCharacter v0.0.0 - MIT license */
'use strict';

var firstNonRepeatedCharacter = function (str) {
  /***** Pseudo Code *****/
  // Turn string into an array
      // Loop over array
        // Search for current element in the 0th through length not including current term
      // If element is found
        // Return that element
      // If last element is not found
        // return null

  /***** Let's rock this *****/
  var arr = str.split('');
  var searchThis = function (term, arr) {
    for (var i=0; i<term; i++) {
      if (arr[i] === arr[term]) {
        return true;
      }
    }
    for (var i=term+1; i<arr.length; i++) {
      if(arr[i] === arr[term]){
        return true;
      }
    }
    return false;
  };
  
  for (var i=0; i<arr.length; i++) {
    if (!searchThis(i,arr)) {
      return arr[i];
    }
  }
  return null;
}
