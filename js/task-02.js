const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


/* var app = document.querySelector('#ingredients');


app.innerHTML = '<ul>' + ingredients.map(function (wizard) {
  return '<li>' + wizard + '</li>';
}).join('') + '</ul>'; */

const items = document.querySelector("ul#ingredients");


let list = ingredients.map(element => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = element;
  return li;
})

items.append(...list);