// ### Task-2: 
// You are given an array of numbers. Count how many times the a number is repeated in the array. 

// sample-input: 
// numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// <br/>

// sample-input: 

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0 

const numbers = [5, 6, 11, 12, 98, 5];
const uniqueElements = new Set();
const duplicates = [];

numbers.forEach(item => {
  if (uniqueElements.has(item)) {
    duplicates.push(item);
  } else {
    uniqueElements.add(item);
  }
});
console.log(duplicates);

if( numbers.includes(25)){
    console.log(true);
}
else{
    console.log(0);
}