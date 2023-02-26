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
    //console.log(isValid);
    message.textContent = 'Please fill out required fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
}

// Add Event Listener 
form.addEvemtListener('submit', processFormData);