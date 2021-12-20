// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf( "101" );


// - Find the last index of `9` in numbers
numbers.lastIndexOf( "9" );


// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join( " " );


// - Add two new words in the strings array "called" and "sentance"
let newStrings = [...strings];
newStrings.push( "called", "sentance" );

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
newStrings.join( " " );


// - Remove the first word in the array (strings)
strings.shift();


// - Find all the words that contain 'is' use string method 'includes'
strings.filter( ( str ) => str.includes( "is" ) );

// - Find all trhe words that contain 'is' use string method 'indexOf'
strings.filter( ( str ) => str.indexOf( "is" ) === -1 ? false : true );


// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every( num => num % 3 == 0 );


// -  Sort Array from smallest to largest
function compare( a, b ) {
  return b - a;
}

numbers.sort( compare );

// - Remove the last word in strings
strings.pop();

// - Find largest number in numbers
numbers.sort( ( a, b ) => b - a )[numbers.length - 1]

// - Find longest string in strings
strings.sort( ( a, b ) => b - a )[strings.length - 1]

// - Find all the even numbers
numbers.filter( num => num % 2 == 0 );

// - Find all the odd numbers
numbers.filter( num => num % 2 != 0 );

// - Place a new word at the start of the array use (unshift)
strings.unshift( "new" );

// - Make a subset of numbers array [18,9,7,11]
numbers.slice( 3, 7 );

// - Make a subset of strings array ['a','collection']
strings.slice( 2, 4 );

// - Replace 12 & 18 with 1221 and 1881
let index1 = numbers.indexOf( 12 );
let index2 = numbers.indexOf( 18 );
numbers[index1] = 1221;
numbers[index2] = 1881;


// - Replace words in strings array with the length of the word
strings = strings.map( str => str.length );

// - Find the sum of the length of words using above question
strings.reduce( ( acc, len ) => acc + len, 0 );


// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

customers.filter( cus => cus.startsWith( "J" ) )

// - Create new array with only first name
customers.map( cus => cus.firstname )

// - Create new array with all the full names (ex: "Joe Blogs")
customers.map( cus => `${cus.firstname} ${cus.lastname}` )

// - Sort the array created above alphabetically
customers.sort()

// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowel = ["a", "e", "i", "o", "u"];

[...customers].filter( customer => {
  for ( let v of vowel ) {
    return v => customer.firstname.includes( v );
  }
} )