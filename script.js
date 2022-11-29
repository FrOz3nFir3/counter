var incrementButton = document.querySelector("#increment");
var decrementButton = document.querySelector("#decrement");
var clearButton = document.querySelector("#clear");
var toggleButton = document.querySelector("#toggleTheme");

var count = document.querySelector(".count");
var error = document.querySelector(".error");

incrementButton.addEventListener("click", changeCount);
decrementButton.addEventListener("click", changeCount);
clearButton.addEventListener("click", changeCount);
function changeCount(event) {
  error.hidden = true;

  var action = event.target.innerText.toLowerCase();
  var currentCount = Number(count.innerText);

  if (action == "increment") {
    count.innerText = currentCount + 1;
    clearButton.hidden = false;
  } else if (action == "decrement") {
    if (currentCount > 0) {
      count.innerText = currentCount - 1;
      if (currentCount == 1) {
        clearButton.hidden = true;
      }
    } else {
      error.hidden = false;
    }
  } else if (action == "clear") {
    count.innerText = 0;
    clearButton.hidden = true;
  }
}
toggleButton.addEventListener("click", changeTheme);
function changeTheme(event) {
  document.body.classList.toggle("bg-light");
  document.body.classList.toggle("bg-dark");
}
