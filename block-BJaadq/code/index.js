// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople() {
  let count = 0;
  got.houses.forEach((x) => (count = count + x.people.length));
  return count;
}

function peopleByHouses() {
  let peopleByHouse = {};
  got.houses.forEach((x) => (peopleByHouse[x.name] = x.people.length));
  return peopleByHouse;
}

function everyone() {
  let arr = [];
  got.houses.forEach((x) => x.people.forEach((y) => arr.push(y.name)));
  return arr;
}

function nameWithS() {
  let arr = [];
  got.houses.forEach((x) =>
    x.people.forEach((y) => {
      if (y.name.startsWith("S")) arr.push(y.name);
    })
  );
  return arr;
}

function nameWithA() {
  let arr = [];
  got.houses.forEach((x) =>
    x.people.forEach((y) => {
      if (y.name.startsWith("A")) arr.push(y.name);
    })
  );
  return arr;
}

function surnameWithS() {
  let arr = [];
  got.houses.forEach((x) =>
    x.people.forEach((y) => {
      let nameArray = y.name.split(" ");
      if (nameArray[nameArray.length - 1].toLowerCase().charAt(0) === "s")
        arr.push(y.name);
    })
  );
  return arr;
}

function surnameWithA() {
  let arr = [];
  got.houses.forEach((x) =>
    x.people.forEach((y) => {
      let nameArray = y.name.split(" ");
      if (nameArray[nameArray.length - 1].toLowerCase().charAt(0) === "a")
        arr.push(y.name);
    })
  );
  return arr;
}

function peopleNameOfAllHouses() {
  let peopleByHouse = {};
  got.houses.forEach((x) => (peopleByHouse[x.name] = x.people));
  const ordered = {};
  Object.keys(peopleByHouse)
    .sort()
    .forEach((z) => (ordered[z] = peopleByHouse[z]));
  return ordered;
}

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
