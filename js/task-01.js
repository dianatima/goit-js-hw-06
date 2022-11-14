const listElem = document.querySelector("ul#categories");

const countItemElem = listElem.children.length;
console.log(`Number of categories: ${countItemElem}`);


const res = [...listElem.children].forEach(elem => {
    
    const category = elem.firstElementChild.textContent;
    const amount = elem.querySelector("ul").children.length;
    
     console.log(`Category: ${category}`);
     console.log(`Elements: ${amount}`)
});
