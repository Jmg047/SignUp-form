const form = document.getElementById('form');
const password1E = document.getElementById('password1');
const password2E = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


let isValid = false;

function validateForm() {
    // Use ConstraintAPI
    isValid = form.checkValidity();
    // Style main message for an error
    if (!isValid) {
    message.textContent = 'Please fill out required fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
    }

    // Check if passwords match
    if (password1E.value === password2E.value) {
        passwordsMatch = true;
        password1E.style.borderColor = 'green';
        password2E.style.borderColor = 'green';
    } else { 
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1E.style.borderColor = 'red';
        password2E.style.borderColor = 'red';
        return;
    }
    
    // if form isValid = true && passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData () {
    const user = {
        name : form.name.value,
        phone : form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    // Do something with user data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
    // Submit data if valid 
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

// Add Event Listener 
form.addEventListener('submit', processFormData);