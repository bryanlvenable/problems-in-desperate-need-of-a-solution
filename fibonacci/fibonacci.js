/*! fibonacci v0.0.0 - MIT license */
'use strict';

var fibonacci = function (term) {
  if (term === 1){
    return 0;
  }
  if (term === 2){
    return 1;
  }
  return fibonacci(term - 1) + fibonacci(term - 2);
}
