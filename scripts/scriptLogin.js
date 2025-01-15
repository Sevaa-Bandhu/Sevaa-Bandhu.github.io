let pass = document.querySelector("#login-password");
document.querySelector("#show-password").addEventListener('change', (event) => {
    if(event.currentTarget.checked)
        pass.type = 'text';
    else
        pass.type = 'password';
});

let passContain = document.querySelector("#password-container");
let showForgetContain = document.querySelector("#forget-show");
let pwdForgotLink = document.querySelector("#forget-pass");
let otpContain = document.querySelector("#otp-container");
let btnSubmit = document.querySelector("#submit");

const showOTPcontain = () => {
    passContain.style.display = "none";
    showForgetContain.style.display = "none";
    otpContain.style.display = "flex";
    document.querySelector("#otp").setAttribute("required", "true");
    btnSubmit.innerHTML = "Verify";
};
pwdForgotLink.addEventListener("click", showForgetContain);

/* btnSubmit.addEventListener("click", () => {
    if(btnSubmit.innerText == "Login"){
        window.location.href = "../html files/Profile.html";
    }
}); */