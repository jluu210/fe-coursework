// 1st Challenge
// Create a mock user json object. It should include the following:
// At least 3 (three) users
// User objects should include the following data:
// Id
// Name
// Email
// Password
// Use an array method to log a templated user greeting for each user

// Here is an example output your progrma should create:

// 'Hello, ryan, your email is ryan@ryan.com'

let users = [
  { id: 1, name: "ryan", email: "ryan@ryan.com", password: "password123" },
  { id: 2, name: "john", email: "john@john.com", password: "password123" },
  { id: 3, name: "lisa", email: "lisa@lisa.com", password: "password123" },
];

users.forEach((user) => {
  console.log(`Hello, ${user.name} your email is ${user.email}`);
});
