
const categorieEl = document.querySelectorAll(`ul#categories li.item`);
console.log(`Number of categories:`, categorieEl.length );

categorieEl.forEach(categori => {
    console.log(`Category: ${categori.querySelector("h2").textContent}\n Elements: ${categori.querySelectorAll('ul li')}`);
})
