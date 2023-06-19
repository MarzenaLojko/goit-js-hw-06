const CategoriesCount = document.querySelectorAll('.item');
console.log(CategoriesCount);

console.log(`Categories Count: ${CategoriesCount.length}`);

CategoriesCount.forEach((item) => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});
