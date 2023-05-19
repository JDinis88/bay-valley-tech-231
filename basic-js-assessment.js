
/* Variables & Data Types */

//Question 1: There are 8 Primitive Data Types in JavaScript, list them all 
//Note: Arrays and Objects are not primitive data-types
//Answer: number, BigInt, string, boolean, null, undefined, symbols

//Question 2: Is JavaScript a dynamically typed Language? or a Statically typed language?
//Answer: dynamic

//Question 3: Variable Scoping
// Part 1 - What 2 types of scope can variables declared with the "var" keyword have?
//Answer: global and local

//Part 2 - As of ES6 JavaScript has 2 new variable declaration keywords: "let" and "const".  
//How are let and const variables scoped?
//Answer: they are both block scoped

//Part 3 - What is the difference between "let" and "const"? Hint: it has to do with variable reassignment
//Answer: const cannot be reassigned a new value, let can


//Question 4:

//Part 1: Read the code written below. What is wrong with the code?

//var carBrandOne = "Ford";
//let carBrandOne = "Mercedes";

//The code creates two different variables with the same name

// comment out the code above and write a correction to the code below this  line
let carBrandOne = "Ford";
carBrandOne = "Mercedes";

//this code reassigns the existing variable instead

//Part 2: Read the code written below. What is wrong with the code?

//const myConstant = {id: 1, name: "Joe", favoriteSnack: "ice cream"}
//myConstant = 10;

//the code tries to reassign a constant variable, which is not allowed
// comment out the code above and write a correction to the code below this  line
let myConstant = {id: 1, name: "Joe", favoriteSnack: "ice cream"}
myConstant = 10;
//we changed the const to let, so we can later reassign it

// Part 3: Read the code written below. What will happen? Will this throw an error?
const myConstant2 = {id: 2, name: "Bill", favoriteSnack: "potato chips"}
myConstant2["name"] = "James"

//It will change the name from "Bill" to "James", because const only protects the object itself, not its data/key values

//Part 4: Read the code written below. Look at the function call below the defined function,
// Will declaring a let variables with the same name throw an error in this case? Why or why not?
// What will the function return?

function variablesExample(number){
    let returnMessage = '';
    if(number > 10){
        let message = "the given number is larger than 10";
        returnMessage = message;
    }else if(number === 10){
        let message = "the given number is equvalent to 10";
        returnMessage = message;
    }else{
        let message = "the given number is less than 10";
        returnMessage = message;

    }
    console.log(returnMessage);
    return returnMessage;
}
variablesExample(15);

//It will not cause an error, because let is block scoped. However, since it has the same name we would no longer be able to change the original, 
//and so it would always return ''

//Question 5: 

// Part-1: What are acceptable characters that you can use to start variable names?
//Answer: lowercase letters

//Part-2: What are acceptable characters that you can use to name variables (after the first character of the name)?
// Answer: -, letters)upper or lowercase), numbers


/* END OF VARIABLES AND STRINGS SECTION */



/* Strings */

// Given the string below,
// Part 1 - Write code that will return the 8th character of the string
// Part 2 - Then write code that will return (or console.log) "is a"
// Note - don't convert this string to an array
let coolString = "Hello World is a tradition";
console.log(coolString.slice(7,8));
console.log(coolString.slice(12,16));

//Part 3
// How would you return the 4th from the last character from the coolString without just hard coding the index of that character?
console.log(coolString.slice(coolString.length-4,coolString.length -3))

//Part 4
// Look at the variables below that have been initialized with string data.  
//What are the 2 ways you can concatinate these strings together?
let aString = "Back to "
let bString = "The Future"

//Write the 2 ways of concatinating the strings below this line.  Declare a new variable for the results.
let string1 = aString +bString;
let string2 = aString.concat(bString);

/*For Loops */
// You are provided an array of strings below
// an example of a console.log is also provided

let namesArray = ["Joe", "Larry", "Bob", "James", "David", "Tim", "Jimmy", "Jessie", "Marty"];
console.log(namesArray["The first name is: ", 0]);

/*directly below this comment, 
write a for loop that iterates over the namesArray from the beginning to the end of the array and logs the names to the console */
for(let i = 0; i<namesArray.length;i++){
    console.log(namesArray[i]);
}

//write a for loop that iterates over the namesArray from the END to the BEGINnING of the array and logs the names to the console
for(let i = namesArray.length-1; i>=0;i--){
    console.log(namesArray[i]);
}

//write a for loop that iterates over the namesArray BUT only logs every other name to the console
for(let i = 0; i<namesArray.length;i+=2){
    console.log(namesArray[i]);
}


/*While Loops*/

// Inside the function below, Write a while loop that will console.log("Hello World") "number" times.  Use continueBoolean in your while loop's specified condition

function whileLoopQuestion1(number){
    let continueBoolean = true;
    let runs = 0;
    while(continueBoolean){
        console.log("Hello World")
        runs++;
        continueBoolean = (runs != number);
    }
    
}

whileLoopQuestion1(20);


/* Array Methods */

//What does the Array.prototype.push() method do? What does it return?
//It puts the argument into the end of the array, and returns the new length of the array.

//What does the Array.prototype.unshift() method do? What does it return?
//It puts the argument into the beginning of the array, and returns the new length of the array.

//What does the Array.prototype.pop() method do? What does it return?
//It removes the last value of the array, and returns its value

//What does the Array.prototype.shift() method do? What does it return?
//It removes the first value of the array, and returns its value

// What does the Array.prototype.join() method do? What does the 1 optional parameter do to modify how this method works? What does it return?
//It returns a string of all the objects in the array, separated by a comma. the optional parameter lets you replace this comma with the parameter. 

//What does the Array.prototype.slice() method do? What will it return?
//It returns an array containing the elements from the start index parameter until the end of the array, or until the end parameter(not inclusive) if it is provided

//What does the Array.prototype.splice() method do? What will it return?
//Modifies the array taking three parameters. First is the start index, the second is how many elements to remove, and the third is elements to be inserted into 
//that space. It returns an array containign the removed elements


//Look at the Array Below
let nestedArray = [ [1,2,3], [4,5,6], [7,8,9], [[10,11,12],[13,14,15],[16,17,18]], 19];
//How many dimensions does this array have?
//3

//How would you access the value 11?
console.log(nestedArray[3][0][1]);

// how would you access the value 5?
console.log(nestedArray[1][1]);

// How would you access the last element in the array without knowing the array's length?
console.log(nestedArray[nestedArray.length-1]);

// How would you access the 3rd element in the array?  What will that element's value be?
console.log(nestedArray[2]);//[7,8,9]

/* Functions */

/* Convert Celsius to Fahrenheit
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

write a function named convertCtoF.
The function should take 1 argument.
The parameter should be named celsius.

Your function needs to accept an argument of a temperature in Celsius, and return the equivalent temperature in Fahrenheit
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
convertCtoF(30); should return 86;

*/
function convertCtoF(celsius){
    return (celsius*9/5) +32;
}
console.log(convertCtoF(30));
