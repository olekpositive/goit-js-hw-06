

const body = document.querySelector("body");
const color = document.querySelector("span.color");


const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0).toUpperCase();
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

const button = document.querySelector("button.change-color");
button.addEventListener("click", setBg);


window.addEventListener("load", () => {
  const hexColor = "#FFFFFF";
  color.textContent = hexColor.toUpperCase();
  body.style.backgroundColor = hexColor;
});