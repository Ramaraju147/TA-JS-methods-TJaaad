let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(arr){
  return [...arr].sort((a,b) => b.length - a.length).shift()
}

// - Convert the above array "words" into an array of length of word instead of word.

let wordsLength = words.map(w => w.length);


// - Create a new array that only contains word with atleast one vowel.

let vowels = ['a','e','i','o','u'];

let vowelWords = words.filter((word) => {
  for( let i of vowels){
    return word.includes(i)
  }
} )

// - Find the index of the word "rhythm"
let index = words.find((word,i) => {
  if(word === "rhythm"){
    return i;
  }
})


// - Create a new array that contians words not starting with vowel.
let newArray = words.filter(word => {
  return vowels.every(vowel => vowel != word[0]);
})

console.log(newArray);


// - Create a new array that contianse words not ending with vowel

let notVowelEndings = words.filter(word => {
  return vowels.every(vowel => vowel != word[word.length-1]);
})

console.log(notVowelEndings);


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

let sumArray = numbers.reduce((acc,num) => acc+num,0);
console.log(sumArray);

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let threeMultiples = numbers.map(num => num*3);

// - Create a new array that contains only even numbers
let evenNum = numbers.filter(num => num%2==0);

// - Create  a new array that contains only odd numbers.
let oddNum = numbers.filter(num => num%2!=0);


// - Create a new array that should have true for even number and false for odd numbers.
let booleanArr = numbers.map(num => num%2==0?true:false);

// - Sort the above number in assending order.
let ascNum = numbers.sort((a,b) => a-b);

// - Does sort mutate the original array?
yes

// - Find the sum of the numbers in the array.
let sum = numbers.reduce((acc,num) => acc+num,0)

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let average = sum/(numbers.length)

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.


let WordLength = strings.reduce((acc,str) => acc+str.length,0)

let averageWordLength = WordLength/strings.length