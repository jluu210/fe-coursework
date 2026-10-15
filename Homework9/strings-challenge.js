// 1. Check if input is a string
function isString(value) {
  return typeof value === "string";
}

// 2. Check if a string is blank
function isBlankString(str) {
  return str.trim() === "";
}

// 3. Capitalize the first character of a string
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 4. Abbreviate a full name
function abbr(name) {
  const parts = name.split(" ");
  return `${parts[0]} ${parts[1].charAt(0)}.`;
}

// 5. Truncate a sentence after a given number of non-space characters

function truncate(sentence, num) {
  return sentence.slice(0, num) + "...";
}

//console.log test
console.log("is ABC a string? ", isString("abc")); // true
console.log("is 190 a string? ", isString(190)); // false

console.log('is "" a blank string? ', isBlankString("")); // true
console.log('is " " a blank string? ', isBlankString(" ")); // true
console.log("is fjfjf a blank string? ", isBlankString("fjfjf")); // false

console.log(
  "Capitalize the first letter of abcdef: ",
  capitalizeFirst("abcdef")
); // "Abcdef"

console.log("Abbreviate Ryan Curtis: ", abbr("Ryan Curtis")); // "Ryan C."

// 6. Slice from the "g" to the end
const str = "The practitioners grappled on the road side!";
console.log(str.slice(18)); // "grappled on the road side!"

console.log(
  'truncate "I am a long sentence" after 5 characters: ',
  truncate("I am a long sentence", 5)
);
