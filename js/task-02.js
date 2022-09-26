const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngrediens = document.querySelector("ul#ingredients")
 const listitem = ingredients.map(el => {
   const newItem = document.createElement("li");
   newItem.textContent = el; 
   newItem.classList.add("item");


   return newItem;
 });

 listIngrediens.append(...listitem);


 console.log(list);

// const newElements = ingredients.map((ingredient) => {
// const element = document.createElement("li");
// element.textContent = ingredient.toString();
// console.log('tst' + element.textContent)
// element.classList.add( ingredient);
// console.log(element.classList);
// });


// listIngrediens.append(...newElements);




// const ingredientsList = document.getElementById('ingredients');

// for (let ingredient of ingredients) {
//   const ingredientEl = document.createElement('li');
//   ingredientEl.innerText = ingredient;
//   ingredientEl.classList.add("item");
//   ingredientsList.appendChild(ingredientEl);
// }




