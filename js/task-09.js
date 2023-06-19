const button = document.querySelector('button.change-color');
const colorName = document.querySelector('div.widget>p>span.color');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener('click', (e) => {
  let displayColor = `${getRandomHexColor()}`;
  //lol nie zauwazylam
  body.style.backgroundColor = displayColor;
  colorName.textContent = displayColor;
});
// zad 9
// kolor wypisany na
// ekran różni się od tego co jest na
// backgroundColor body.
// Trzeba zmienić kod w taki sposób,
// by wywoływać funkcję
// getRandomHexColor tylko raz.
// można zapisywać otrzymany kolor po
// pierwszym wywołaniu do zmiennej i
// już korzystać ze zmiennej by
// nadać kolor dla body oraz
// wypisać go do html'a
