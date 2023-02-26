const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const { email, password} = event.currentTarget.elements;
    if (!(email.value.trim() && password.value.trim())) alert('Заповніть всі поля!');
    else { console.log({ email: email.value.trim(), password: password.value.trim() }) };
    event.target.reset();
};

