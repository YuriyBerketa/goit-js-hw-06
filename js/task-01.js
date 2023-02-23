const ulListRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${ulListRef.length}`);


ulListRef.forEach(el => {
    const titleRef = el.firstElementChild.textContent;
    const liLengthRef = el.lastElementChild.children.length;
    console.log(`Category: ${titleRef}`);
    console.log(`Elements: ${liLengthRef}`);
})


