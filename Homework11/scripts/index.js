const firstObject = { id: 1, name: "ryan" };
const secondObject = {
  address: "123 fake st",
  phone: "555-555-5555",
};

const combinedObject = { ...firstObject };

for (const key in secondObject) {
  if (!(key in combinedObject)) {
    combinedObject[key] = secondObject[key];
  }
}

console.log(combinedObject);

function largestNum(a, b) {
  if (a === b) {
    return a;
  }

  return a > b ? a : b;
}

console.log(largestNum(9, 12));

function titleCase(sentence) {
  return sentence
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

console.log(titleCase("I am a sentence"));

function sortLetters(text) {
  return text.replace(/\s/g, "").toLowerCase().split("").sort().join("");
}

console.log(sortLetters("Hi there"));

function sortLettersCapitalized(text) {
  return text
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .map((letter) => letter.toUpperCase())
    .join("");
}

console.log(sortLettersCapitalized("Hi there"));
