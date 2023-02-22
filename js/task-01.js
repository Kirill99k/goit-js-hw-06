const itemEl = document.querySelectorAll('li.item');

console.log(`Number of categories: ${itemEl.length}`);


itemEl.forEach(element => {
    const titleEl = element.firstElementChild;
    const innerLiEl = element.lastElementChild.children;
    console.log('Category: ', titleEl.textContent);
    console.log('Elements: ', innerLiEl.length);
})
