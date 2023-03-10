const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];
const count = fruits.reduce(function(accumulator, currentValue) {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});
console.log(count); // Output: {apple: 3, banana: 2, orange: 1}


