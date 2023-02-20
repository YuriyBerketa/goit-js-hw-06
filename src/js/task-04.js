let counterValue = 0;
const decrementRef = document.querySelector('button[data-action="decrement"]');
// console.log(decrementRef);
const valueRef = document.querySelector('[id="value"]');
// console.log(valueRef)
const incrementRef = document.querySelector('button[data-action="increment"]');


incrementRef.addEventListener("click", ()=>{
const count1 = counterValue +=1;
return valueRef.textContent = count1;
})

decrementRef.addEventListener("click", ()=> {
   const count2 = counterValue -=1;
return valueRef.textContent = count2;
})

