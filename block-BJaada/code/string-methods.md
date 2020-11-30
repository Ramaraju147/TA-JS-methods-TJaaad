Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

- Parameter: it doesn't take any parameter
  - Return: returns upper case string (string data type)
  - Example:
  ```js
  let name = "Arya Stark";
  name.toUpperCase();
  let sentance = "A quick brown fox jumped over a lazy dog";
  sentance.toUpperCase();
  let houseName = "Starks";
  houseName.toUpperCase();
  ```
  `toUpperCase` - applies on string and returns upperCase string

3. `toLowerCase`

- Parameter: it doesn't take any parameter
  - Return:returns lower case string (string data type)
  - Example:
  ```js
  let name = "Arya Stark";
  name.toLowerCase();
  let sentance = "A quick brown fox jumped over a lazy dog";
  sentance.toLowerCase();
  let houseName = "Starks";
  houseName.toLowerCase();
  ```
  `toLowerCase` - applies on string and returns lowerCase string

4. `trim`

- Parameter: it doesn't take any parameter
  - Return: returns new string removing whitespace on both ends (string data type)
  - Example:
  ```js
  let name = "    Arya Stark";
  name.trim();
  let sentance = "  A quick brown fox jumped over a lazy dog   ";
  sentance.trim();
  let houseName = "Starks   ";
  houseName.trim();
  ```
  `trim` - applies on string and returns new string removing whitespace on both ends

5. `trimEnd`

- Parameter: it doesn't take any parameter
  - Return: returns new string removing whitespace on right end (string data type)
  - Example:
  ```js
  let name = "Arya Stark    ";
  name.trimEnd();
  let sentance = "  A quick brown fox jumped over a lazy dog   ";
  sentance.trimEnd();
  let houseName = "Starks   ";
  houseName.trimEnd();
  ```
  `trimEnd` - applies on string and returns new string removing whitespace on right end

6. `trimStart`

- Parameter: it doesn't take any parameter
  - Return: returns new string removing whitespace on left end (string data type)
  - Example:
  ```js
  let name = "    Arya Stark";
  name.trimStart();
  let sentance = "  A quick brown fox jumped over a lazy dog";
  sentance.trimStart();
  let houseName = "   Starks";
  houseName.trimStart();
  ```
  `trimStart` - applies on string and returns new string removing whitespace on left end

7. `concat`

- Parameter: it takes strings as parameters to concatenate
  - Return: returns new string combining strings passed in as parameters (string data type)
  - Example:
  ```js
  let name = "Arya Stark";
  name.concat(" I am Warrior");
  let sentance = "  A quick brown fox jumped over a lazy dog";
  sentance.concat("", "Right infront of it.");
  let houseName = "   Starks";
  "".concat(houseName);
  ```
  `concat` - takes strings as parameters and contatenates to string upon which it is called.

8. `endsWith`

- Parameter: it takes characters to be searched at the end of the string, also it has optional parameter length of the main string otherwise it defaults to str.length
  - Return: returns boolean value
  - Example:
  ```js
  let name = "Arya Stark";
  name.endsWith("rk");
  let sentance = "  A quick brown fox jumped over a lazy dog";
  sentance.endsWith("Dog");
  let houseName = "   Starks";
  houseName.endsWith("rk", 8);
  ```
  `endsWith` - lets you determine whether or not a string ends with another string.

9. `includes`

- Parameter: string to be searched for within str, optional parameter position within the string at which to begin searching
  - Return: returns boolean value
  - Example:
  ```js
  let name = "Arya Stark";
  name.includes("a");
  let sentance = "  A quick brown fox jumped over a lazy dog";
  sentance.includes("fox");
  let houseName = "   Starks";
  houseName.includes("a", 5);
  ```
  `includes` - method lets you determine whether or not a string includes another string.

10. `indexOf`

- Parameter: string to be searched for within str, optional parameter position within the string at which to begin searching
  - Return: returns index number type
  - Example:
  ```js
  let name = "Arya Stark";
  name.includes("a");
  let sentance = "  A quick brown fox jumped over a lazy dog";
  sentance.includes("fox");
  let houseName = "   Starks";
  houseName.includes("a", 5);
  ```
  `includes` - method lets you determine whether or not a string includes another string.

11. `lastIndexOf`

- Parameter: string to be searched for within str, optional parameter The index of the last character in the string to be considered as the beginning of a match. string type (Search Happens backwards)
  - Return: returns index of the last occurrence number type
  - Example:
  ```js
  let name = "Arya Stark";
  name.lastIndexOf("a");
  let sentance = "  A quick brown fox jumped over a lazy dog";
  sentance.lastIndexOf("0");
  let houseName = "   Starks";
  houseName.lastIndexOf("s", 5);
  ```
  `lastIndexOf` - The index of the last occurrence of searchValue; -1 if not found.

12. `padEnd`

- Parameter: The length of the resulting string once the current string has been padded. if the length is less than str than it returns str as it is. as optional parameter it takes string to pad with current string and if padstring exceeds the length then it will truncated from left-to-right.
  - Return: string with specified length with padstring addded to the end.
  - Example:
  ```js
  let name = "Arya Stark";
  name.padEnd(30, "a");
  let sentance = "  A quick brown fox jumped over a lazy dog";
  sentance.padEnd(50);
  let houseName = "   Starks";
  houseName.padEnd(15, "bucks");
  ```
  `padEnd` - pads the current string upto specified length with padstring if provided or whitespace if not provided.

13. `padStart`

- Parameter: The length of the resulting string once the current string has been padded. if the length is less than str than it returns str as it is. as optional parameter it takes string to pad with current string and if padstring exceeds the length then it will truncated from left-to-right.
  - Return: string with specified length with padstring addded to the start.
  - Example:
  ```js
  let name = "Arya Stark";
  name.padStart(30, "a");
  let sentance = "  A quick brown fox jumped over a lazy dog";
  sentance.padStart(50);
  let houseName = "   Starks";
  houseName.padStart(15, "bucks");
  ```
  `padEnd` - pads the current string upto specified length with padstring if provided or whitespace if not provided.

14. `repeat`

- Parameter: takes an integer indicating the number of times to repeat the string.
  - Return: A new string containing the specified number of copies of the given string
  - Example:
  ```js
  let name = "Arya Stark";
  name.repeat(3);
  let sentance = "  A quick brown fox jumped over a lazy dog";
  sentance.repeat(2);
  let houseName = "   Starks";
  houseName.repeat(10);
  ```
  `repeat` - returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

15. `replace`

- Parameter: takes two parameters, as first parameter it accepts either regex or string to replace and second parameter either newsubstr or function
  - Return: A new string, with some or all matches of a pattern replaced by a replacement.
  - Example:
  ```js
  let name = "Arya Stark";
  name.replace("Ar", "LA");
  let sentance = "  A quick brown fox jumped over a lazy dog";
  sentance.replace(/A/gi, "***");
  let houseName = "   Starks";
  houseName.replace("   ", "The ");
  ```
  `replace` - The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.

16. `slice`

- Parameter: takes two parameters, as first parameter it accepts beginIndex which to begin extraction and second is optional endIndex before which to end extraction. The character at this index will not be included.
  - Return: A new string containing the extracted section of the string.
  - Example:
  ```js
  let name = "Arya Stark";
  name.slice(2);
  let sentance = "  A quick brown fox jumped over a lazy dog";
  sentance.slice(3, -2);
  let houseName = "   Starks";
  houseName.slice(-3, -1);
  ```
  `slice` - slice() extracts the text from one string and returns a new string. Changes to the text in one string do not affect the other string.

17. `split`

- Parameter: takes two optional parameters, as first parameter it accepts a simple string or it can be a regular expression.
  as second parameter it accepts number (non-negative integer) to limit on the number of substrings to be included in the array
  - Return: Array of strings, split at each point where the separator occurs in the given string.
  - Example:
  ```js
  let name = "Arya Stark";
  name.split(" ");
  let sentance = "  A quick brown fox jumped over a lazy dog";
  sentance.split(" ", 6);
  let houseName = "   Starks";
  houseName.split(" ");
  ```
  `split` - The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.

18. `substring`

- Parameter: takes two parameters, as first parameter it accepts beginIndex which to begin extraction and second is optional endIndex before which to end extraction. The character at this index will not be included.
  - Return: A new string containing the specified part of the given string.
  - Example:
  ```js
  let name = "Arya Stark";
  name.substring(2);
  let sentance = "  A quick brown fox jumped over a lazy dog";
  sentance.substring(3, -2);
  let houseName = "   Starks";
  houseName.substring(-3, -1);
  ```
  `substring` -substring() extracts characters from indexStart up to but not including indexEnd
