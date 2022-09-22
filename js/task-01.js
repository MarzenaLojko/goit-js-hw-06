const CategoriesCount = document.querySelectorAll(".item");

console.log(`Categories Count: ${CategoriesCount.length}`)

CategoriesCount.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);

})