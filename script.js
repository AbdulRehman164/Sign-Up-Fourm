const button = document.querySelector('button');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const passwordMatch = document.querySelector('.password-match');

button.addEventListener('click', (e) => {
    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        passwordMatch.style.display = 'block';
        password.style.outline = '1px solid red';
        confirmPassword.style.outline = '1px solid red';
        password.value = '';
        confirmPassword.value = '';
    }
});
