For the given code below you have to draw the diagram of how these things are working. Make it similar to the how it was done in previous (Visualise Array Methods) exercise.

- Keep the images in the `img` folder
- using the `![](./img/imagename.png)` add images below each code snippet

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function double(num) {
  alert(num);
}
let doubleNum = numbers.forEach(double);
```

![](./img/main.png)

It provides numbers as stream of data to double
it doesn't return anything as we are using forEach but alerts each number

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function double(num) {
  return num * 2;
}
let doubleNum = numbers.forEach(double);
```

It provides numbers as stream of data to double
it doesn't return anything as we are using forEach but returned values are garbage collected.

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function double(num) {
  console.log(num);
}
let doubleNum = numbers.forEach(double);
```

It provides numbers as stream of data to double
it doesn't return anything as we are using forEach but prints the number.

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function double(num) {
  return num * 2;
}
let doubleNumbers = numbers.map(double);
```

It provides numbers as stream of data to double
it returns array of same length with each number is doubled.

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function addTwo(num) {
  return num + 2;
}
let doubleNumbers = numbers.map(addTwo);
```

It provides numbers as stream of data to addTwo
it returns array of same length with two is added to each number

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function addTwo(num) {
  console.log(num);
}
let doubleNumbers = numbers.map(addTwo);
```

It provides numbers as stream of data to addTwo
it returns array of same length with undefined also console.logs the number

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function addTwo(num) {
  alert(num);
}
let doubleNumbers = numbers.map(addTwo);
```

It provides numbers as stream of data to addTwo
it returns array of same length with undefined also alerts the number

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function isOdd(num) {
  return num % 2 !== 0;
}
let oddNumbers = numbers.filter(isOdd);
```

It provides numbers as stream of data to isOdd
it returns array of numbers which returns truthy value.

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function test(num) {
  return num;
}
let filteredNumbers = numbers.filter(test);
```

It provides numbers as stream of data to test
it returns array of numbers which returns truthy value after converting number to boolean

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function test(num) {
  console.log(num);
}
let filteredNumbers = numbers.filter(test);
```

It provides numbers as stream of data to test
it returns empty array but prints the number.

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function add(accumulator, currentValue) {
  return accumulator + currentValue;
}
let sum = numbers.reduce(add);
```

It provides numbers as stream of data to add
it returns sum 570 and

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function add(accumulator, currentValue) {
  console.log(accumulator + currentValue);
}
let sum = numbers.reduce(add);
```

It provides numbers as stream of data to add
it prints 300 first and then adds undefined with number which logs NaN
