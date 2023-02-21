const inputRef = document.querySelector('#validation-input');
console.log(inputRef);
inputRef.classList = 'validation-input';
console.log(inputRef);
const maxLength = inputRef.dataset.length;
console.log(maxLength);


inputRef.addEventListener('blur', onInputValid);


function onInputValid(event) {
    // if (event.currentTarget.value.length > maxLength) {
    //     inputRef.classList.add('invalid');   
    // } else if (event.currentTarget.value.length > 0){
    //     inputRef.classList.add('valid');
    // } 
    inputRef.classList = maxLength == event.currentTarget.value.length ? "valid" : "invalid";
    
}
