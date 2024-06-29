document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('password-error');
    let errorMessages = [];

    if (password.length < 8) {
        errorMessages.push('Le mot de passe doit contenir au moins 8 caractères.');
    }
    if (!/[A-Z]/.test(password)) {
        errorMessages.push('Le mot de passe doit inclure au moins une majuscule.');
    }
    if (!/[a-z]/.test(password)) {
        errorMessages.push('Le mot de passe doit inclure au moins une minuscule.');
    }
    if (!/[0-9]/.test(password)) {
        errorMessages.push('Le mot de passe doit inclure au moins un chiffre.');
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errorMessages.push('Le mot de passe doit inclure au moins un caractère spécial.');
    }

    if (errorMessages.length > 0) {
        event.preventDefault(); 
        passwordError.innerHTML = errorMessages.join('<br>');
    } else {
        passwordError.innerHTML = '';
    }
})

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});;
