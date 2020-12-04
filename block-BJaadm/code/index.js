let persons = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
  { name: "John", grade: 17, sex: "M" },
  { name: "Arya", grade: 14, sex: "F" },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map((x) => x.name);

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((x) => x.grade);

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = person.map((x) => x.sex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
peopleName.forEach((x) => {
  if (x.name.startsWith("J") || x.name.startsWith("P")) {
    console.log(x);
  }
});

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
peopleName.forEach((x) => {
  if (x.name.startsWith("A") || x.name.startsWith("C")) {
    console.log(x);
  }
});

// Log all the filtered male ('M') in persons array
persons.filter((x) => x.sex === "M").forEach((x) => console.log(x));

// Log all the filtered female ('F') in persons array
persons.filter((x) => x.sex === "F").forEach((x) => console.log(x));

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
persons
  .filter((x) => {
    if (x.sex === "F" && (x.name.startsWith("C") || x.name.startsWith("J"))) {
      return true;
    }
  })
  .forEach((x) => console.log(x));

// Log all the even numbers from peopleGrade array
peopleGrade.forEach((x) => {
  if (x % 2 == 0) {
    console.log(x);
  }
});

// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find((x) => x.name.startsWith("J")));

// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find((x) => x.name.startsWith("P")));

// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(
  persons.find((x) => {
    if (x.name.startsWith("J") && x.grade > 10 && x.sex == "F") {
      return true;
    }
  })
);

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((x) => x.sex === "F");

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((x) => x.sex === "M");

// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc, sum) => acc + sum);

// Find the average grade
gradeTotal / peopleGrade.length;

// Find the average grade of male
malePersons.reduce((acc, ele) => acc + ele.grade, 0);

// Find the average grade of female
femalePersons.reduce((acc, ele) => acc + ele.grade, 0);
// Find the highest grade
[...peopleGrade].sort((a, b) => a - b).pop();

// Find the highest grade in male
[...malePersons].sort((a, b) => a.grade - b.grade)[malePersons.length - 1]
  .grade;

// Find the highest grade in female
[...femalePersons].sort((a, b) => a.grade - b.grade)[femalePersons.length - 1]
  .grade;

// Find the highest grade for people whose name starts with 'J' or 'P'
persons
  .filter((x) => {
    if (x.name.startsWith("J") || x.name.startsWith("P")) {
      return true;
    }
  })
  .sort((a, b) => a.grade - b.grade)
  .pop();

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a, b) => a - b).forEach((x) => console.log(x));

// Sort the peopleGrade in descending order
peopleGrade.sort((a, b) => b - a);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
[...peopleGrade].sort((a, b) => b - a);


// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort()

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopleName].sort()