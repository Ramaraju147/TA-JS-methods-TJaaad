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

let longestWord = words.sort((a, b) => a.length - b.length).pop();

// - Convert the above array "words" into an array of length of word instead of word.
longestWord.length;

// - Create a new array that only contains word with atleast one vowel.
let vowel = ["a", "e", "i", "o", "u"];
words.filter((w) => {
  for (let v of vowel) {
    if (w.includes(v)) {
      return true;
    }
  }
});

// - Find the index of the word "rhythm"
words.indexOf("rythm");

// - Create a new array that contians words not starting with vowel.
words.filter((w) => {
  for (let v of vowel) {
    if (!w.startsWith(v)) {
      return true;
    }
  }
});

// - Create a new array that contianse words not ending with vowel
words.filter((w) => {
  for (let v of vowel) {
    if (!w.endsWith(v)) {
      return true;
    }
  }
});

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

function sumArray(acc, number) {
  return acc + number;
}
numbers.reduce(sumArray);

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
numbers.map((number) => number * 3);

// - Create a new array that contains only even numbers
numbers.filter((number) => number % 2 == 0);

// - Create  a new array that contains only odd numbers.
numbers.filter((number) => number % 2 !== 0);

// - Create a new array that should have true for even number and false for odd numbers.
numbers.map((number) => number % 2 == 0);

// - Sort the above number in assending order.
numbers.sort((a, b) => a - b);

// - Does sort mutate the original array?
yes;

// - Find the sum of the numbers in the array.
numbers.reduce((acc, num) => acc + num);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(arr) {
  let sum = arr.reduce((acc, num) => acc + num);
  let avg = sum / arr.length;
  return avg;
}

averageNumbers(numbers);

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

function averageWordLength(str) {
  let sum = str.reduce((acc, st) => acc + st.length, 0);
  console.log(sum);
  return sum / str.length;
}
