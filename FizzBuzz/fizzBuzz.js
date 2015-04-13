/*! fizzBuzz v0.0.0 - MIT license */
'use strict';


/*
FizzBuzz
Print numbers 1 to 100
For mulitples of 3 print Fizz
For mulitples of 5 print Buzz
For mulitples of 3 and 7 print FizzBuzz
The result should be printed to the console with each entry on a new line
*/

var fizzBuzz = function () {
  for (var i=1; i<=100; i++){
    var string = '';
    if (i % 3 === 0){
      string += 'Fizz';
    }
    if (i % 5 === 0){
      string += 'Buzz';
    } if (string.length === 0){
      string = i;
    }
    console.log(string);
  }
}
