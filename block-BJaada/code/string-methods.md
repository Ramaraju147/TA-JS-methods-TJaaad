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

   - Parameter: no arguments required
   - Return: returns string with upper case
   - Example:
     ```js
     let name = "Arya Stark";
     name.toUpperCase(); 
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance.toUpperCase(); 
     let houseName = "Starks";
     houseName.toUpperCase(); 
     ```
   - `toUpperCase` returns value converted to upper case;


3. `toLowerCase`

   - Parameter: no arguments required
   - Return: returns string with lower case
   - Example:
     ```js
     let name = "Arya Stark";
     name.toLowerCase(); 
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance.toLowerCase(); 
     let houseName = "Starks";
     houseName.toLowerCase(); 
     ```
   - `toLowerCase` returns value converted to lower case;


4. `trim`

   - Parameter: no arguments required
   - Return: returns string with white space trimmed on both ends
   - Example:
     ```js
     let name = "  Arya Stark";
     name.trim(); 
     let sentance = "A quick brown fox jumped over a lazy dog   ";
     sentance.trim(); 
     let houseName = "  Starks  ";
     houseName.trim(); 
     ```
   - `trim` returns value with white space trimmed on both ends;


5. `trimEnd`

   - Parameter: no arguments required
   - Return: returns string with white space trimmed on rear end
   - Example:
     ```js
     let name = "  Arya Stark  ";
     name.trimEnd(); 
     let sentance = "A quick brown fox jumped over a lazy dog   ";
     sentance.trimEnd(); 
     let houseName = "  Starks  ";
     houseName.trimEnd(); 
     ```
   - `trimEnd` returns value with white space trimmed on rear ends;
   Alias - `trimRight`


6. `trimStart`

   - Parameter: no arguments required
   - Return: returns string with white space trimmed on front end
   - Example:
     ```js
     let name = "  Arya Stark  ";
     name.trimStart(); 
     let sentance = "  A quick brown fox jumped over a lazy dog   ";
     sentance.trimLeft(); 
     let houseName = "  Starks  ";
     houseName.trimStart(); 
     ```
   - `trimStart` returns value with white space trimmed on front ends;
   Alias - `trimLeft`

7. `concat`

   - Parameter: one or more strings
   - Return: returns string
   - Example:
     ```js
     let name = "Arya Stark";
     name.conact(" ","winterfall"); 
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance.concat(" husky"); 
     let houseName = "  Starks  ";
     houseName.concat(" of Winterfall"); 
     ```
   - `concat` returns string to calling string with concatenated strings passed as the arguments


8. `endsWith`

   - Parameter: 
      1) string to search at the end
      2) number optional if provided only considers until that index number of original str
   - Return: boolean ( true or false)
   - Example:
     ```js
     let name = "Arya Stark";
     name.endsWith("rk"); 
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance.endsWith("kate"); 
     let houseName = "Starks";
     houseName.endsWith("a",3); 
     ```
   - `endsWith` returns boolean after checking the string passed as argument at the end.



9. `includes`

   - Parameter: 
      1) string to search
      2) number optional starts the search from that index
   - Return: boolean ( true or false)
   - Example:
     ```js
     let name = "Arya Stark";
     name.includes("rk"); 
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance.includes("kate"); 
     let houseName = "Starks";
     houseName.includes("a",3); 
     ```
   - `endsWith` returns boolean after case sensitive checking the string passed as argument in the whole string;


10. `indexOf`

   - Parameter: 
      1) string to search defaults to undefined if not provided
      2) number optional starts the search from that index
   - Return: number index of first Occurence or -1 ( if not found)
   - Example:
     ```js
     let name = "Arya Stark";
     name.indexOf("rk"); 
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance.indexOf("kate"); 
     let houseName = "Starks";
     houseName.indexOf("a",3); 
     ```
   - `indexOf` returns number index of first Occurence or -1 ( if not found)
   note: indexOf with empty string produces strange results;

11. `lastIndexOf`

   - Parameter: 
      1) string to search defaults to undefined if not provided
      2) number optional trims string until that position and starts searching from backwards
   - Return: number index of first Occurence or -1 ( if not found)
   - Example:
     ```js
     let name = "Arya Stark";
     name.lastIndexOf("rk"); 
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance.lastIndexOf("kate"); 
     let houseName = "Starks";
     houseName.lastIndexOf("a",3); 
     ```
   - `lastIndexOf` returns number index of first Occurence or -1 ( if not found)
   note: indexOf with empty string produces strange results;

12. `padEnd`

   - Parameter: 
      1) string length after original is padded at the end, it it less than original string length then it returns original string
      2) string to pad
   - Return: string 
   - Example:
     ```js
     let name = "Arya Stark";
     name.padEnd(15,""); 
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance.padEnd(sentance.length+5,"."); 
     let houseName = "Starks";
     houseName.padEnd(houseName.length+5,"*"); 
     ```
   - `padEnd` returns string after padding 



13. `padStart`

   - Parameter: 
      1) string length after original is padded at the start, it it less than original string length then it returns original string
      2) string to pad
   - Return: string 
   - Example:
     ```js
     let name = "Arya Stark";
     name.padStart(15,""); 
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance.padStart(sentance.length+5,"."); 
     let houseName = "Starks";
     houseName.padStart(houseName.length+5,"*"); 
     ```
   - `padStart` returns string after padding at the start



14. `repeat`

   - Parameter: 
      1) number which specifies the copy of how many times to repeat

   - Return: string 
   - Example:
     ```js
     let name = "Arya Stark";
     name.repeat(2); 
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance.repeat(3); 
     let houseName = "Starks";
     houseName.repeat(5); 
     ```
   - `repeat` returns string after concatenating with count no


15. `replace`

   - Parameter: 
      1) pattern either regex or substr
      2) new string to replace

   - Return: string 
   - Example:
     ```js
     let name = "Arya Stark";
     name.replace("Ar","ar"); 
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance.replace("a","e"); 
     let houseName = "Starks";
     houseName.replace("Starks","Lannisters"); 
     ```
   - `replace` returns string after changing with found matches


16. `slice`

   - Parameter: 
      1) begin index
      2) end index

   - Return: string 
   - Example:
     ```js
     let name = "Arya Stark";
     name.slice(1,10); 
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance.slice(2,5); 
     let houseName = "Starks";
     houseName.slice(4,-2); 
     ```
   - `slice` returns string extracted



17. `split`

 - Parameter: 
      1) seperator ( string | regex) optional
      2) limit - optional

   - Return: string 
   - Example:
     ```js
     let name = "Arya Stark";
     name.split(" "); 
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance.split("a"); 
     let houseName = "Starks";
     houseName.split("t",2); 
     ```
   - `split` returns array split at each point where the separator occurs in the given string.




18. `substring`

   - Parameter: 
      1) begin index
      2) end index

   - Return: string 
   - Example:
     ```js
     let name = "Arya Stark";
     name.substring(1,10); 
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance.substring(2,5); 
     let houseName = "Starks";
     houseName.substring(4,-2); 
     ```
   - `substring` returns string extracted

