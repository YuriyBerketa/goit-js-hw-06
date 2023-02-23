const fscRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fscRef.addEventListener('input', el => {
    textRef.style.fontSize = `${el.currentTarget.value}px`;
});