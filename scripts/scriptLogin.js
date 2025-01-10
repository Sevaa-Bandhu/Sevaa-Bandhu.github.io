let pass = document.querySelector("#login-password");
document.querySelector("#show-password").addEventListener('change', (event) => {
    if(event.currentTarget.checked)
        pass.type = 'text';
    else
        pass.type = 'password';
});

