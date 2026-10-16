// 1
const student = {
  id: 1138,
  name: "John Smith",
  age: 24,
  dob: "01/12/2002",
  gradesCompleted: [12, 11, 10, 9],
  school: {
    program: {
      name: "Computer Science",
      level: "Undergraduate",
    },
  },
  "delete me": "value",
};

const output = `Person ${student.id} has been through grade ${student.gradesCompleted[0]}, etc...`;

console.log(output);
console.log(student);

delete student["delete me"];

console.log(student);

// 2
const user = {
  firstName: "John",
  lastName: "Smith",
  city: "New York",
  semesters: {
    semesterOne: "incomplete",
    semesterTwo: "incomplete",
    semesterThree: "incomplete",
    semesterFour: "incomplete",
  },
};

user.semesters.semesterOne = "complete";
user.semesters.semesterTwo = "complete";
user.semesters.semesterThree = "complete";

delete user.semesters.semesterFour;

user.favoriteLanguage = "JavaScript";

console.log(user);

// 3
let myList = ["apple", 42, true, "banana", 7, false];

myList.pop(); // remove last value in array
myList.shift(); // remove first value in array
myList.push("end_value"); // add to end_value to end of myList
myList.unshift("new_start_value"); // add to beginning of myList
myList[2] = "replaced"; // replace 3rd item in myLast

const copiedList = [...myList];

const secondArray = ["extra", 100];
const mergedArray = [...myList, ...secondArray];

console.log(myList);
console.log(copiedList);
console.log(mergedArray);
