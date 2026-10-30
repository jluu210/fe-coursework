// 2nd Challenge
// In class we built an xmlhttprequest function. In this exercise you will "promisfy" the xmlhttprequest function (which means it will return a promise).

// You promisified function will do the following:

// Appropriately resolve and reject that promise
// Store the promise in a variable
// Catch any errors
// Contain at least 2 (two) then statements
// 1st then statement will log the data
// 2nd then statement will log a specific data point
// Fetch data from the SWAPI API. (Documentation found at https://www.swapi.tech/documentation)

// Make the "promisfy" using dynamic features including:

// Alerts
// Prompts
// And any other dynamic feature we either covered or not covered in class.

function getData(url) {
  return new Promise((resolve, reject) => {
    const rq = new XMLHttpRequest();
    rq.open("GET", url);
    rq.responseType = "json";
    rq.onload = function () {
      if (rq.status >= 200 && rq.status < 300) {
        //success
        resolve(rq.response);
      } else {
        //unsuccessful
        reject(`ERROR: ${rq.status}`);
      }
    };
    rq.onerror = function () {
      reject("Network error");
    };
    rq.send();
  });
}
const pmpt = prompt("Enter a People ID [1-82]");

const url = "https://www.swapi.tech/api/people/" + pmpt;
const promise = getData(url)
  .then((data) => {
    console.log(data);
    return data.result.properties;
  })
  .then((dataPoint) => {
    alert(`Found: ${dataPoint.name}`);
    console.log(dataPoint.name);
  })
  .catch((error) => {
    console.error(error);
  });
