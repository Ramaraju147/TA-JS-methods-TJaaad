Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return:a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

- Parameter: Specifies a string to separate each pair of adjacent elements of the array (string),if we don't specify anything elements are comma seperated.
- Return: string with all array elements joined.
- Example:
  ```js
  let numbers = [1, 2, 3];
  numbers.join();
  let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
  sentanceArray.join(" ");
  let colors = ["red", "green", "blue"];
  colors.join();
  ```
- `join` - all array elements are joined into one string with specified separator
- No it does not mutate the original array

3. `flat`

- Parameter: The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
- Return: A new array with the sub-array elements concatenated into it.
- Example:
  ```js
  let numbers = [1, [2, 3]];
  numbers.flat();
  let sentanceArray = [1, 2, [3, 4, [5, 6]]];
  sentanceArray.flat(3);
  let colors = [1, 2, [3, 4, [5, 6]]];
  colors.flat(infinity);
  ```
- `flat` - The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
- No it does not mutate the original array

4. `push`

- Parameter: The element(s) to add to the end of the array.
- Return: The new length property of the object upon which the method was called.
- Example:
  ```js
  let numbers = ["soccer", "baseball"];
  numbers.push("football");
  let sentanceArray = [1, 2, 4, 5];
  let length = sentanceArray.push(3);
  let colors = [1, 2, [3, 4, [5, 6]]];
  colors.push(7);
  ```
- `push` - The push() method adds one or more elements to the end of an array and returns the new length of the array.
- it does mutate the original array

5. `indexOf`

- Parameter: It takes two parameter one is search element, second is from index to start the search at default is 0
- Return: The first index of the element in the array; -1 if not found.
- Example:
  ```js
  let numbers = [1, [2, 3]];
  numbers.indexOf(3);
  let sentanceArray = [1, 2, [3, 4, [5, 6]]];
  sentanceArray.indexOf(2);
  let colors = ["red", "green", "blue"];
  colors.indexOf("red", -3);
  ```
- `indexOf` - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
- No it does not mutate the original array

6. `lastIndexOf`

- Parameter: It takes two parameter one is search element, second is from index to start the search at default is 0
- Return: The first index of the element in the array; -1 if not found.
- Example:
  ```js
  let numbers = [1, [2, 3]];
  numbers.indexOf(3);
  let sentanceArray = [1, 2, [3, 4, [5, 6]]];
  sentanceArray.indexOf(2);
  let colors = ["red", "green", "blue"];
  colors.indexOf("red", -3);
  ```
- `lastIndexOf` - The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
- No it does not mutate the original array

7. `includes`

- Parameter: It takes two parameter one is The value to search for., second is from index to start the search at default is 0
- Return: A Boolean which is true if the value valueToFind is found within the array
- Example:
  ```js
  let numbers = [1, [2, 3]];
  numbers.includes(1);
  let sentanceArray = [1, 2, [3, 4, [5, 6]]];
  sentanceArray.includes([5, 6]);
  let colors = ["red", "green", "blue"];
  colors.includes("blue");
  ```
- `includes` - The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
- No it does not mutate the original array

8. `reverse`

- Parameter: none
- Return: The reversed array.
- Example:
  ```js
  let numbers = [1, [2, 3]];
  numbers.reverse();
  let sentanceArray = [1, 2, [3, 4, [5, 6]]];
  sentanceArray.reverse();
  let colors = ["red", "green", "blue"];
  colors.reverse();
  ```
- `reverse` -The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
- it does mutate the original array.

9. `every`

- Parameter: A function to test for each element, taking three arguments:
  The current element being processed in the array.
  The index of the current element being processed in the array.
  The array every was called upon.
- Return: true if the callback function returns a truthy value for every array element. Otherwise, false.
- Example:

  ```js
  let numbers = [1, 2, 3];
  let result = numbers.every(cb);
  function cb(element) {
    return element < 5;
  }
  let sentanceArray = [1, 2, 3, 4, 5, 6];
  let sentenceResult = sentanceArray.every(cb);
  let colors = ["red", "green", "blue"];
  colors.every(eleLength);
  function eleLength(ele) {
    if (ele.length > 2) {
      return true;
    }
    return false;
  }
  ```

- `every` -The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
- it does not mutate the original array.

10. `shift`

- Parameter: none
- Return: The removed element from the array; undefined if the array is empty.
- Example:
  ```js
  let numbers = [1, [2, 3]];
  numbers.shift();
  let sentanceArray = [1, 2, [3, 4, [5, 6]]];
  sentanceArray.shift();
  let colors = ["red", "green", "blue"];
  colors.shift();
  ```
- `shift` -The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
- it does mutate the original array.

11. `splice`

- Parameter: first argument The index at which to start changing the array. two optional parameters An integer indicating the number of elements in the array to remove from start., The elements to add to the array, beginning from start
- Return: An array containing the deleted elements.
- Example:
  ```js
  let numbers = [1, [2, 3]];
  numbers.splice(1);
  let sentanceArray = [1, 2, [3, 4, [5, 6]]];
  sentanceArray.splice(1, 0, [2, 3]);
  let colors = ["red", "green", "blue"];
  colors.splice(2, 1, "green");
  ```
- `reverse` -The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
- it does mutate the original array.

12. `find`

- Parameter: callback
  Function to execute on each value in the array, taking 3 arguments:
  element
  The current element in the array.
  index Optional
  The index (position) of the current element in the array.
  array Optional
  The array that find was called on.
- Return: The value of the first element in the array that satisfies the provided testing function.
- Example:
  ```js
  let numbers = [1, 2, 3];
  numbers.find((x) => x === 3);
  let sentanceArray = [1, 2, 3, 4, 5, 6];
  sentanceArray.find((x) => x % 2 == 0);
  let colors = ["red", "green", "blue"];
  colors.find((x) => x.length == 5);
  ```
- `find` -The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
- it does not mutate the original array.

13. `unshift`

- Parameter: The elements to add to the front of the arr.
- Return: The new length property of the object upon which the method was called.
- Example:
  ```js
  let numbers = [1, [2, 3]];
  numbers.unshift(4);
  let sentanceArray = [1, 2, [3, 4, [5, 6]]];
  sentanceArray.unshift([2, 3]);
  let colors = ["red", "green", "blue"];
  colors.unshift("yellow");
  ```
- `unshift` -The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
- it does mutate the original array.

14. `findIndex`
    Parameter: callback
    Function to execute on each value in the array, taking 3 arguments:
    element
    The current element in the array.
    index Optional
    The index (position) of the current element in the array.
    array Optional
    The array that find was called on.

- Return: The index of the first element in the array that satisfies the provided testing function.
- Example:
  ```js
  let numbers = [1, 2, 3];
  numbers.findIndex((x) => x === 3);
  let sentanceArray = [1, 2, 3, 4, 5, 6];
  sentanceArray.findIndex((x) => x % 2 == 0);
  let colors = ["red", "green", "blue"];
  colors.findIndex((x) => x.length == 5);
  ```
- `findIndex` -The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
- it does not mutate the original array.

15. `filter`
    Parameter: callback
    Function to execute on each value in the array, taking 3 arguments:
    element
    The current element in the array.
    index Optional
    The index (position) of the current element in the array.
    array Optional
    The array that find was called on.

- Return: The array of the all elements that satisfies the provided testing function.
- Example:
  ```js
  let numbers = [1, 2, 3];
  numbers.filter((x) => x === 3);
  let sentanceArray = [1, 2, 3, 4, 5, 6];
  sentanceArray.filter((x) => x % 2 == 0);
  let colors = ["red", "green", "blue"];
  colors.filter((x) => x.length == 5);
  ```
  - `filter` -The filter() method creates a new array with all elements that pass the test implemented by the provided function.
- it does not mutate the original array.

16. `flat`

- Parameter: The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
- Return: A new array with the sub-array elements concatenated into it.
- Example:
  ```js
  let numbers = [1, [2, 3]];
  numbers.flat();
  let sentanceArray = [1, 2, [3, 4, [5, 6]]];
  sentanceArray.flat(3);
  let colors = [1, 2, [3, 4, [5, 6]]];
  colors.flat(infinity);
  ```
- `flat` - The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
- No it does not mutate the original array

17. `forEach`
    Parameter: callback
    Function to execute on each value in the array, taking 3 arguments:
    element
    The current element in the array.
    index Optional
    The index (position) of the current element in the array.
    array Optional
    The array that find was called on.

- Return: undefined.
- Example:
  ```js
  let numbers = [1, 2, 3];
  numbers.forEach((x) => console.log(x));
  let sentanceArray = [1, 2, 3, 4, 5, 6];
  let sum = 0;
  sentanceArray.forEach((x) => (sum += x));
  let colors = ["red", "green", "blue"];
  let str = "";
  colors.forEach((x) => (str = str + x + " "));
  ```
  - `forEach` -The forEach() method executes a provided function once for each array element.
- it does not mutate the original array.

18. `map`
    Parameter: callback
    Function to execute on each value in the array, taking 3 arguments:
    element
    The current element in the array.
    index Optional
    The index (position) of the current element in the array.
    array Optional
    The array that find was called on.

- Return: A new array with each element being the result of the callback function.
- Example:
  ```js
  let numbers = [1, 2, 3];
  numbers.map((x) => x * 2);
  let sentanceArray = [1, 2, 3, 4, 5, 6];
  sentanceArray.map((x) => x + 2);
  let colors = ["red", "green", "blue"];
  let colorResult = colors.map((x) => x.repeat(2));
  ```
  - `forEach` -The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
- it does not mutate the original array.

19. `pop`

- Parameter: none
- Return: The removed element from the array; undefined if the array is empty.
- Example:
  ```js
  let numbers = [1, [2, 3]];
  numbers.pop();
  let sentanceArray = [1, 2, [3, 4, [5, 6]]];
  sentanceArray.pop();
  let colors = ["red", "green", "blue"];
  colors.pop();
  ```
- `pop` -The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
- it does mutate the original array.

20. `reduce`

    Parameter: The reducer function takes four arguments:

Accumulator
Current Value
Current Index
Source Array

- Return: Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.
- Example:
  ```js
  let numbers = [1, 2, 3];
  let numResult = numbers.reduce((x, y) => x + y);
  let sentanceArray = [1, 2, 3, 4, 5, 6];
  sentanceArray.reduce((x, y) => x + y * 2);
  let colors = ["red", "green", "blue"];
  let colorResult = colors.reduce((x, y) => x + y);
  ```
  - `reduce` -The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
- it does not mutate the original array.

21. `slice`

- Parameter: aceepts two optional parameters index at which to start extraction, index before which to end extraction
- Return: A new array containing the extracted elements.
- Example:
  ```js
  let numbers = [1, [2, 3]];
  numbers.slice(1);
  let sentanceArray = [1, 2, [3, 4, [5, 6]]];
  sentanceArray.slice(1, 3);
  let colors = ["red", "green", "blue"];
  colors.slice(5);
  ```
- `slice` -The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
- it does not mutate the original array.

22. `some`

- Parameter: A function to test for each element, taking three arguments:
  The current element being processed in the array.
  The index of the current element being processed in the array.
  The array every was called upon.
- Return: true if the callback function returns a truthy value even for one array element. Otherwise, false.
- Example:

  ```js
  let numbers = [1, 2, 3];
  let result = numbers.some(cb);
  function cb(element) {
    return element < 5;
  }
  let sentanceArray = [1, 2, 3, 4, 5, 6];
  let sentenceResult = sentanceArray.some(cb);
  let colors = ["red", "green", "blue"];
  colors.some(eleLength);
  function eleLength(ele) {
    if (ele.length > 2) {
      return true;
    }
    return false;
  }
  ```

- `some` -The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
- it does not mutate the original array.
