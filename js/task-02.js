const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const createLi = (element) => {
  const itemRef = document.createElement('li');
  itemRef.classList.add('item');
  itemRef.textContent = element;
  return itemRef;
}

ingredientsRef.append(...ingredients.map(createLi));
