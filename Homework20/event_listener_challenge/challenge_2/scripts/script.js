const getJokeButton = document.querySelector("#get-joke");
const clearJokesButton = document.querySelector("#clear-jokes");
const jokesContainer = document.querySelector("#jokes-container");

getJokeButton.addEventListener("click", getJoke);
clearJokesButton.addEventListener("click", clearJokes);

async function getJoke() {
  const url =
    "https://v2.jokeapi.dev/joke/Any?safe-mode&blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("The request failed.");
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.message);
    }

    const jokeElement = document.createElement("article");
    jokeElement.classList.add("joke");

    if (data.type === "single") {
      jokeElement.textContent = data.joke;
    } else {
      const setup = document.createElement("p");
      setup.textContent = data.setup;

      const punchline = document.createElement("p");
      punchline.textContent = data.delivery;

      jokeElement.append(setup, punchline);
    }

    jokesContainer.appendChild(jokeElement);
  } catch (error) {
    console.error("Could not fetch a joke:", error);
  }
}

function clearJokes() {
  jokesContainer.innerHTML = "";
}
