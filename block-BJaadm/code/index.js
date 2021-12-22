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
let peopleName = persons.map(person => person.name);

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map(person => person.grade);


// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map(person => person.sex);


// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log(peopleName.filter(person => person.startsWith('J') || person.startsWith('P')));


// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(peopleName.filter(person => person.startsWith('A') || person.startsWith('C')));

// Log all the filtered male ('M') in persons array
let malePersons = persons.filter(person => person.sex == 'M');

// Log all the filtered female ('F') in persons array
let femalePersons = persons.filter(person => person.sex == 'F');


// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(femalePersons.filter(person => person.name.includes == 'C' || person.name.includes == 'J'))


// Log all the even numbers from peopleGrade array
console.log(peopleGrade.forEach(grade =>{
   if(grade%2 == 0){
     console.log(grade);
   }
  }
   ))


// Find the first name that starts with 'J' in persons array and log the object

persons.forEach(person => {
  if(person.name.startsWith("J")){
    console.log(person);
  }
})


// Find the first name that starts with 'P' in persons array and log the object

persons.forEach(person => {
  if(person.name.startsWith("P")){
    console.log(person);
  }
})

// Find the first name that starts with 'J', grade is greater than 10 and is a female
persons.forEach(person => {
  if(person.name.startsWith("J") && person.grade>10 && person.sex == "female"){
    console.log(person);
  }
})


// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(person => person.sex == 'F');


// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter(person => person.sex == 'M');


// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons.reduce((acc,person) => {
return acc+person.grade;
},0)

// Find the average grade
let averageGrade = gradeTotal/persons.length


// Find the average grade of male
let maleGradeTotal = malePersons.reduce((acc,per) => acc+per.grade,0);

let maleAverageGrade = maleGradeTotal/malePersons.length


// Find the average grade of female

let femaleGradeTotal = femalePersons.reduce((acc,per) => acc+per.grade,0);

let femaleAverageGrade = femaleGradeTotal/femalePersons.length


// Find the highest grade

let highestGrade = [...peopleGrade].sort((a,b) => b-a)[0]


// Find the highest grade in male
let highestGradeInMale = [...malePersons].sort((a,b) => b.grade-a.grade)[0].grade


// Find the highest grade in female
let highestGradeInFemale = [...femalePersons].sort((a,b) => b.grade-a.grade)[0].grade



// Find the highest grade for people whose name starts with 'J' or 'P'
let highestGradeJP = [...persons].filter(person => person.name.startsWith('J') || person.name.startsWith('P')).sort((a,b) => b.grade - a.grade)[0]


// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a,b) => a-b);

// Sort the peopleGrade in descending order
peopleGrade.sort((a,b) => b-a);


// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
[...peopleGrade].sort((a,b) => b-a);


// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort();


// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopleName].sort();
