function submitForm(event) {
    event.preventDefault();

    let isFormValid = true;

    for(let i = 0; i < 100; i++) {
        console.log(i);
    }
    
    // Get Values from HTML inputs elements
    const firstNameElement = document.querySelector('#firstName');

    const firstName = firstNameElement.value;
    const lastNameElement = document.querySelector('#lastName');
    const lastName = lastNameElement.value;
    const ageElement = document.querySelector('#age');
    const age = ageElement.value;
    const emailElement = document.querySelector('#email');
    const email = emailElement.value;
    const eighteenOrOlderElement = document.querySelector('#eighteenOrOlder');
    const eighteenOrOlder = eighteenOrOlderElement.value;
    const passwordElement = document.querySelector('#password');
    const password = passwordElement.value;
    const passwordConfirmElement = document.querySelector('#passwordConfirm');
    const passwordConfirm = passwordConfirmElement.value;

    // Clearing Error Classes.
    firstNameElement.classList.remove('error');
    lastNameElement.classList.remove('error');
    ageElement.classList.remove('error');
    emailElement.classList.remove('error');
    eighteenOrOlderElement.classList.remove('error');
    passwordElement.classList.remove('error');
    passwordConfirmElement.classList.remove('error');

    // Validate all values
    if(firstName === '') {
        // firstName is NOT valid.

        // Highlight the firstName input box to red;
        firstNameElement.classList.add('error');
        isFormValid = false;
    }

    if(lastName === '') {
        // lastName is NOT valid.

        // Highlight the lastName input box to red;
        lastNameElement.classList.add('error');
        isFormValid = false;
    }

    const numberAge = Number(age); // Covert String to Number

    if(age === '' || isNaN(numberAge) || numberAge < 0) {
        // Age validation failed.

        // Highlight the age input box to red;
        ageElement.classList.add('error');
        isFormValid = false;
    }

    const isEmailValid = emailIsValid(email);

    if(!isEmailValid) {
        // The email is invalid.
        emailElement.classList.add('error');
        isFormValid = false;
    }

    if(eighteenOrOlder === 'true' && numberAge < 18) {
        ageElement.classList.add('error');
        eighteenOrOlderElement.classList.add('error');
        isFormValid = false;
    }

    if(password === '' || passwordConfirm === '') {
        passwordElement.classList.add('error');
        passwordConfirmElement.classList.add('error');
        isFormValid = false;
    }

    if(password.length < 8 || passwordConfirm.length < 8) {
        passwordElement.classList.add('error');
        passwordConfirmElement.classList.add('error');
        isFormValid = false;
    }

    if(password !== passwordConfirm) {
        passwordElement.classList.add('error');
        passwordConfirmElement.classList.add('error');
        isFormValid = false;
    }

    // If form is valid, submit to server
    if(isFormValid) {
        alert('Successfully Submitted Form!');
    }
    else {
        alert('Form Not Valid. Please fix!');
    }
}

function emailIsValid(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);

    return isValid;
}