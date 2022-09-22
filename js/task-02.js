const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngrediens = document.querySelector("#ingredients")


const newElements = ingredients.map((ingredient) => {
const element = document.createElement("li");
element.textContent = ingredient.toString();
console.log('tst' + element.textContent)
element.classList.add( ingredient);
console.log(element.classList);
});


listIngrediens.append(...newElements);




const ingredientsList = document.getElementById('ingredients');

for (let ingredient of ingredients) {
  const ingredientEl = document.createElement('li');
  ingredientEl.innerText = ingredient;
  ingredientEl.classList.add("item");
  ingredientsList.appendChild(ingredientEl);
}




