/*! mergeSort v0.0.0 - MIT license */
'use strict';

var mergeSort = function (arr) {
  // Subroutine to merge two arrays
  var merge = function (mergeThis, withThis) {
    var returnedArray = [];
    while (mergeThis.length > 0 || withThis.length > 0) {
      if (mergeThis[0] === undefined) {
        returnedArray.push(withThis.shift());
      } else if (withThis[0] === undefined) {
        returnedArray.push(mergeThis.shift());
      } else if (mergeThis[0] <= withThis[0]) {
        returnedArray.push(mergeThis.shift());
      } else {
        returnedArray.push(withThis.shift());
      }
    }
    return returnedArray;
  };

  // Subroutine to turn each element of each array into an array of that element
  var arrayEachElement = function (arrayOfElements) {
    var results = [];
    for (var i=0; i<arrayOfElements.length; i++) {
      var temp = [];
      temp.push(arrayOfElements[i]);
      results.push(temp);
    }
    return results;
  }

  if (arr.length === 0) {
    return arr;
  }

  var arrayOfArrays = arrayEachElement(arr);

  while (arrayOfArrays.length > 1) {
    console.log(arrayOfArrays);
    arrayOfArrays.push(merge(arrayOfArrays[0], arrayOfArrays[1]));
    arrayOfArrays.shift();
    arrayOfArrays.shift();
  }

  return arrayOfArrays[0];
};

