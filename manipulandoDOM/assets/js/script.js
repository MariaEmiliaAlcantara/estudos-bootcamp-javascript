const button = document.getElementById("button");
const footer = document.getElementById("footer");
const title = document.getElementById("title");
const body = document.getElementById("body");

button.addEventListener("click", changeMode);

function changeMode() {
  footer.classList.toggle("dark-mode");
  button.classList.toggle("dark-mode");
  title.classList.toggle("dark-mode");
  body.classList.toggle("dark-mode");

  if (title.innerHTML === "Light Mode ON") {
    title.innerHTML = "Dark Mode ON";
  } else if (title.innerHTML === "Dark Mode ON") {
    title.innerHTML = "Light Mode ON";
  }

  if (button.innerHTML === "Dark Mode") {
    button.innerHTML = "Light Mode";
  } else if (button.innerHTML === "Light Mode") {
    button.innerHTML = "Dark Mode";
  }
}
