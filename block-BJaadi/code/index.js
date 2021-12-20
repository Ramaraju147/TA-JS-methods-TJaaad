// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101)

// - Find the last index of `9` in numbers
numbers.lastIndexOf(9)

// - Convert value of strings array into a sentance like "This is a collection of words"
[...strings].join(" ")

// - Add two new words in the strings array "called" and "sentance"
  let newStrings = [...strings]
newStrings.push("called","sentance")

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
newStrings.join(" ")

// - Remove the first word in the array (strings)
strings.shift()

// - Find all the words that contain 'is' use string method 'includes'
strings.filter(x =>
{
  if (x.includes("is"))
  {
    return x
  }
});

// - Find all trhe words that contain 'is' use string method 'indexOf'
strings.filter(x =>
  {
    if (x.indexOf("is")!==-1)
    {
      return x
    }
  });

// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(x => x % 3 == 0);

// -  Sort Array from smallest to largest
numbers.sort((a, b) => a - b);

// - Remove the last word in strings
strings.pop();

// - Find largest number in numbers
numbers.sort((a, b) => a - b)[numbers.length-1]

// - Find longest string in strings
strings.sort((a,b) => a.length-b.length)[strings.length-1]

// - Find all the even numbers
numbers.filter(x => x % 2 == 0);

// - Find all the odd numbers
numbers.filter(x => x % 2 !== 0);

// - Place a new word at the start of the array use (unshift)
strings.unshift("This")

// - Make a subset of numbers array [18,9,7,11]
numbers.slice(numbers.indexOf(18),numbers.indexOf(11)+1)

// - Make a subset of strings array ['a','collection']
strings.slice(numbers.indexOf('a'),numbers.indexOf("collection")+1)

// - Replace 12 & 18 with 1221 and 1881
let indexOf12 = numbers.indexOf(12);
let indexOf18 = numbers.indexOf(18);
numbers[indexOf12] = 1221;
numbers[indexOf18]=1881


// - Replace words in strings array with the length of the word
strings = strings.map(x => x.length)

// - Find the sum of the length of words using above question
strings.reduce((sum, ele) => sum + ele);


// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
customers.filter(x => x.firstname[0] === "J");


// - Create new array with only first name
customers.map(x=>x.firstname)

// - Create new array with all the full names (ex: "Joe Blogs")
let sortedCustomers = customers.map(x=>x.firstname.concat(" ",x.lastname))

// - Sort the array created above alphabetically
sortedCustomers.sort();


// - Create a new array that contains only user who has at least one vowel in the firstname.

let vowel = ["a", "e", "i", "o", "u"];

customers.filter(x =>
{
  for (let y of vowel)
  {
    if (x.firstname.includes(y))
    {
      return true;
    }
  }
});

customers.filter((x) =>
{
  if (x.firstname.includes("a") || x.firstname.includes("e") || x.firstname.includes("i") || x.firstname.includes("o") || x.firstname.includes("u"))
  {
    return true;
  }
})