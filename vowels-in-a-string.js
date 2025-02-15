// ### Task-3: 
// Write a function to count the number of vowels in a string.

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(sentence) {
  let counts = 0;
  for(let number = 0; number < vowels.length; number++) {
    if(vowels.includes(sentence[number])) {
      counts++;
    }
  }
  return console.log(counts);
}

countVowels('Hello World');
countVowels('AaEeIiOoUu');
countVowels('aaaaa');