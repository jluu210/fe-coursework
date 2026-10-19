//Question 1
function checkUser(user) {
  let page = "";
  if (user.isBanned) {
    page = "/banned";
  } else if (!user.loggedIn) {
    page = "/login";
  } else if (!user.emailVerified) {
    page = "/verify-email";
  } else if (user.isAdmin) {
    page = "/admin";
  } else {
    page = "/dashboard";
  }

  console.log(page);
}

const users = [
  {
    loggedIn: true,
    emailVerified: true,
    isAdmin: true,
    isBanned: false,
  },
  {
    loggedIn: false,
    emailVerified: false,
    isAdmin: false,
    isBanned: false,
  },
  {
    loggedIn: true,
    emailVerified: true,
    isAdmin: false,
    isBanned: true,
  },
  {
    loggedIn: true,
    emailVerified: false,
    isAdmin: false,
    isBanned: false,
  },
];

for (const user of users) {
  checkUser(user);
}

const articles = [
  { title: "Getting Started with React", views: 4200, published: true },
  { title: "CSS Grid vs Flexbox", views: 8900, published: true },
  { title: "Node.js Best Practices", views: 6100, published: false },
  { title: "JavaScript Promises Explained", views: 12400, published: true },
  { title: "Understanding REST APIs", views: 9750, published: true },
];

//Question 2
function highestArticleViews(articles) {
  let maxArticle = null;

  for (const article of articles) {
    if (
      article.published &&
      (!maxArticle || article.views > maxArticle.views)
    ) {
      maxArticle = article;
    }
  }

  if (maxArticle === null) {
    return "No published articles found.";
  }

  return `Most viewed: "${maxArticle.title}" with ${maxArticle.views.toLocaleString()} views`;
}

console.log(highestArticleViews(articles));

//Question 3
// Write a program that converts a number into an array of numbers. Ensure
// each element in the array is a number data type and NOT a string data
// type.

// Here is an example of potential output:
// numToArray(12345) => [1, 2, 3, 4, 5]

function numToArray(numbers) {
  const numberArray = [];
  for (const digit of String(Math.abs(numbers))) {
    numberArray.push(Number(digit));
  }
  console.log(numberArray);
}

numToArray(12345);

//Question 4

const arrayOne = [1, 2, 3];
const arrayTwo = ["a", "b", "c", "d"];

const matrix = [];

for (const number of arrayOne) {
  for (const letter of arrayTwo) {
    matrix.push([number, letter]);
    matrix.push([letter, number]);
  }
}

console.log(matrix);
