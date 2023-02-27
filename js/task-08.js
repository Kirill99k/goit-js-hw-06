'use strict';

const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', handleFormSubmit);


function handleFormSubmit(event) {
    event.preventDefault();
    
    const formEl = event.target.elements;
    const emailEl = formEl.email.value;
    const passwordEl = formEl.password.value;
    

    if (emailEl === '' || passwordEl === '') {
        return alert('Please fill in all the fields!');
    }

    const formData = {
        emailEl,
        passwordEl,
    }

    console.log(formEl);

    console.log(formData);
    event.target.reset();
}
