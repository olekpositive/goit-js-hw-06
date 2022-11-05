
const color = document.querySelector("span.color");

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

const button = document.querySelector("button.change-color");
button.addEventListener("click", setBg);
