// NOTE: You can not use reduce methods to solve this exercise

/*
#### Open `index.js` and do the following:

You have a file named `data.js` that contains the data that is accessible to you using name `got`.

Note: Solve all the problems without using the reduce method.

- 1. Write a function called `countAllPeople` which counts the total number of people in `got` variable defined in `data.js` file.

- 2. Write a function called `peopleByHouses` which counts the total number of people in different houses in the `got` variable defined in `data.js` file.

- 3. Write a function called `everyone` which returns a array of names of all the people in `got` variable.

- 4. Write a function called `nameWithS` which returns a array of names of all the people in `got` variable whose name includes `s` or `S`.

- 5. Write a function called `nameWithA` which returns a array of names of all the people in `got` variable whose name includes `a` or `A`.

- 6. Write a function called `surnameWithS` which returns a array of names of all the people in `got` variable whoes surname is starting with `S`(capital s).

- 7. Write a function called `surnameWithA` which returns a array of names of all the people in `got` variable whoes surname is starting with `A`(capital a).

- 8. Write a function called `peopleNameOfAllHouses` which returns an object with the key of the name of house and value will be all the people in the house in an array.

*/

import got from "./data";

function countAllPeople(){
  let count = 0;
  got.houses.forEach((house) => count=count+house.people.length)
  return count;
}

function peopleByHouses(){
  let countByHouse = {} ;
  got.houses.forEach((house) => countByHouse[house.name] = house.people.length)
  return countByHouse;
}

function everyone(){
  let everyone = [] ;
  got.houses.forEach((house) =>  house.people.forEach(p => everyone.push(p.name)))
  return everyone;
}

function nameWithS(){
  let array = [] ;
  got.houses.forEach((house) =>  house.people.forEach(p => {
    if(p.name.toLowerCase().includes("s")){
      array.push(p.name)
    }
  }))
  return array;
}

function nameWithA(){
  let array = [] ;
  got.houses.forEach((house) =>  house.people.forEach(p => {
    if(p.name.toLowerCase().includes("a")){
      array.push(p.name)
    }
  }))
  return array;
}

function surnameWithS(){
  let arr = [];
  got.houses.forEach((house) => house.people.forEach(p => {
    let name = p.name.split(" ")
    if(name[name.length-1].startsWith("S")){
      arr.push(p.name)
    }
  }))
  return array;
}

function surnameWithA(){
  let arr = [];
  got.houses.forEach((house) => house.people.forEach(p => {
    let name = p.name.split(" ")
    if(name[name.length-1].startsWith("A")){
      arr.push(p.name)
    }
  }))
  return array;
}

function peopleNameOfAllHouses(){
  let obj = {};
  got.houses.forEach((house) => {
    let arr = []
    house.people.forEach(p => arr.push(p.name))
    obj[house.name] = arr
  })
  return obj;
}
peopleNameOfAllHouses()
// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), "with s");
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), "surname with s");
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
