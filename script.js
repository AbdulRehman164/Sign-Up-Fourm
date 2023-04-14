button = document.querySelector('button');
password = document.querySelector('#password');
confirmPassword = document.querySelector('#confirm-password');
passwordMatch = document.querySelector('.password-match');
button.addEventListener('click',(e)=>{
    if(password.value !== confirmPassword.value){
        e.preventDefault();
        passwordMatch.style.display = 'block';
        password.style.border = '2px solid red';
        confirmPassword.style.border = '2px solid red';

    }
});