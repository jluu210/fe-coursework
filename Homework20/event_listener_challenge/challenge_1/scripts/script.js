const button = document.querySelector("#color-button");
const display = document.querySelector("#color-display");

function decToHex(decNum) {
  const digits = "0123456789ABCDEF";
  const hexDigits = [];

  if (decNum === 0) {
    return "0";
  }

  while (decNum > 0) {
    const remainder = decNum % 16;
    hexDigits.push(digits[remainder]);
    decNum = Math.floor(decNum / 16);
  }

  return hexDigits.reverse().join("");
}

button.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 16777216);
  const hexValue = "#" + decToHex(randomNumber).padStart(6, "0");

  display.textContent = hexValue;
  display.style.backgroundColor = hexValue;
  display.style.webkitTextStroke = "1px white";
});
