var underscore = require('underscore');
var array = [3,6,9,1,12];

console.log(array[0]);
console.log(underscore.first(array)); // 배열의 첫 번째 원소 리턴
console.log(array[array.length-1]);
console.log(underscore.last(array));