const listElem = document.querySelector("ul#categories");

const countItemElem = listElem.children.length;
console.log(`Number of categories: ${countItemElem}`);


const res = [...listElem.children].map(elem => {
    
    const category = elem.firstElementChild.textContent;
    const amount = elem.querySelector("ul").children.length;
    
    return console.log(`Category: ${category}, Elements: ${amount}`)
});