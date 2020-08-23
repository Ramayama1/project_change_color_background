const rainbow = ["red", "orange", "yellow", "green", "blue", "purple"];
function randomNumber() {
  return Math.floor(Math.random() * rainbow.length);
}

function changeColor() {
  document.querySelector("body").style.backgroundColor =
    rainbow[randomNumber()];
}
const changeColorButton = document.querySelector("button");
changeColorButton.addEventListener("click", changeColor);
