const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingRef = document.querySelector('ul');
// console.log(ingRef);

// // const one = ingRef.createElement('li');


// const liRef = document.createElement('li');
// liRef.classList.add('item');
// // liRef.createElement('p');

// console.log(liRef);
// const paragRef = document.createElement('p');
// paragRef.textContent = "Potatoes";
// // console.log(paragRef);

// const addP = liRef.append(paragRef);

// conts addUl = ingRef.append(addP);

// console.log(ingRef);

// const liRef = document.createElement('li');
// liRef.classList.add('item');
// liRef.textContent = 'Potatoes';
// // console.log(liRef);

// const ulRef = document.querySelector('ul');
// ulRef.append(liRef);

const linksRef = ingredients.map(el => {
const liRef = document.createElement('li');
liRef.classList.add('item');
liRef.textContent = el;
liRef.style.listStyleType = "none";
  
const ulRef = document.querySelector('ul');
ulRef.append(liRef);
  
  return liRef;
})