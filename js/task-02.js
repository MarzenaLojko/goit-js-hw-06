const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientList = document.getElementById('ingredients');
const ingredientElement = [];
for (let i = 0; i < ingredients.length; i++) {
  ingredientElement[i] = document.createElement('li');
  ingredientElement[i].textContent = ingredients[i];
  ingredientElement[i].classList.add('item');
}
ingredientList.append(...ingredientElement);
// wewnątrz pętli powoduje,
//  że operacja dodawania elementów
//  do html'a wykonuje się tyle razy,
//  ile mamy elementów.
//  możemy jednak nie używać appendChild wewnątrz pętli .
//  Mamy metodę .append, która pozwala w taki sposób
//  domNode.append(...tablicaElementow)
//  dodać wszystkie elementy znajdujące się w
//  tablicy podczas jednej operacji.
//  Trzeba Ci zmienić kod w taki sposób,
//  by wewnątrz forEach tylko zapisywać
//  elementy do jakiejś tablicy,
//  a już dopiero po pętli robić ten .append.
