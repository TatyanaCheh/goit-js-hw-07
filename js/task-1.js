
const categoriesEl = document.querySelectorAll(`ul#categories li.item`);
console.log(`Number of categories:`, categoriesEl.length );

categoriesEl.forEach(category => {
    const categoryItems = category.querySelectorAll("ul li")
    console.log(`Category: ${category.querySelector("h2").textContent}\n Elements: ${categoryItems.length}`);
})
