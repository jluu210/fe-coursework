// 1. Write a program that takes an array of words and returns the longest word.
// ['a', 'b', 'cc'] => 'cc'

function longestWord(words) {
  let longest = "";

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord(["a", "b", "cc"]));

// 2. Write a program that swaps the first and last characters of a string.
//'ryan' => 'nyar'

function swapFirstAndLast(str) {
  if (str.length < 2) return str;

  return str[str.length - 1] + str.slice(1, -1) + str[0];
}

console.log(swapFirstAndLast("ryan"));

// 3. Write a program that finds the sum of a list of numbers.
// [1, 2, 3] => 6

function sumNumbers(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(sumNumbers([1, 2, 3]));

// 4. Combine two arrays by alternatingly taking elements from each at every iteration.
// EX: [1, 2, 3], [4, 5, 6] => [1, 4, 2, 5, 3, 6]
function alternateArrays(arrayOne, arrayTwo) {
  const result = [];
  const longestLength =
    arrayOne.length > arrayTwo.length ? arrayOne.length : arrayTwo.length;

  for (let i = 0; i < longestLength; i++) {
    if (i < arrayOne.length) result.push(arrayOne[i]);
    if (i < arrayTwo.length) result.push(arrayTwo[i]);
  }

  return result;
}

console.log(alternateArrays([1, 2, 3], [4, 5, 6]));

// 5. Create a title case program
// EX: "I am a sentence" => "I Am A Sentence"

function titleCase(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      if (word.length === 0) return word;
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

console.log(titleCase("I am a sentence")); // "I Am A Sentence"

// 6. Return longest word in a string
// EX: "This string has several different values" => "different"

function longestWordInString(sentence) {
  const words = sentence.split(/\s+/);
  let longest = "";

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWordInString("This string has several different values"));

// 7. Write a program that takes a string and returns the letters in alphabetical order
// EX: "Hi there" => "eehhirt"

function sortLetters(str) {
  return str.toLowerCase().replace(/\s/g, "").split("").sort().join("");
}

console.log(sortLetters("Hi there"));

// 8. Write a program that returns extracted values from an array using specified indices and puts them into a new array.
// ['a', 'b', 'c', 'd'], [1, 3] => ['b', 'd']

// ['a', 'b', 'c', 'd'] is the original code.
// [1, 3] is the specified indices for the array (index 1 and index 3).
// [b, d] is the new array returned from the specified indices.

function valuesAtIndices(array, indices) {
  const result = [];

  for (const index of indices) {
    if (index >= 0 && index < array.length) {
      result.push(array[index]);
    }
  }

  return result;
}

console.log(valuesAtIndices(["a", "b", "c", "d"], [1, 3]));

// 9. Complete the following steps:

// a. Create an object named user. Give the object 2 (two) properties named userName and activeStatus.

// The userName property should take any string value.
// The starter (or default) for the activeStatus property should be set to 'away'.

// b. Write an arrow function:

// That changes the activeStatus to 'active'.
// Returns an interpolated string that contains the userName and activeStatus values.
// login(user) => 'ryan is active'

const user = {
  userName: "ryan",
  activeStatus: "away",
};

const login = (user) => {
  user.activeStatus = "active";
  return `${user.userName} is ${user.activeStatus}`;
};

console.log(login(user));

// 10. Write a function that takes a base value and an exponent and will return the product (power).
// pow(4,2) => 16

// Note: No outside or pre-built functions and the ** exponent operator is not allowed.

function pow(base, exponent) {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
}

console.log(pow(4, 2));
