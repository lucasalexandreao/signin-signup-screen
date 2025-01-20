var signupButton = document.querySelector("#signup");
var signinButton = document.querySelector("#signin");
var signupForm = document.querySelector("#signup-form");
var signinForm = document.querySelector("#signin-form");
var signupEmailInput = document.querySelector("#signup-email");
var signinEmailInput = document.querySelector("#signin-email");
var signupSubmit = document.querySelector("#signup-submit");
var signinSubmit = document.querySelector("#signin-submit");
var signinErrorMessage = document.querySelector("#signin-error-message");
var signupErrorMessage = document.querySelector("#signup-error-message");
var body = document.querySelector("body");

function validateEmail(email) {
    const emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}

signinForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if(validateEmail(signinEmailInput.value)) {
        if(signinErrorMessage.hasChildNodes()) {
            childNode = signinErrorMessage.firstChild;
            signinErrorMessage.removeChild(childNode);
        }
        event.currentTarget.submit();
    } else {
        var errorMessage =  "<p class=\"error\">Email inválido! Tente novamente.</p>"
        signinErrorMessage.innerHTML = errorMessage;
    }
});

signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if(validateEmail(signupEmailInput.value)) {
        if(signupErrorMessage.hasChildNodes()) {
            childNode = signupErrorMessage.firstChild;
            signupErrorMessage.removeChild(childNode);
        }
        event.currentTarget.submit();
    } else {
        var errorMessage =  "<p class=\"error\">Email inválido! Tente novamente.</p>"
        signupErrorMessage.innerHTML = errorMessage;
    }
});

signupButton.addEventListener("click", () => {
    body.className = "signup-js";
});

signinButton.addEventListener("click", () => {
    body.className = "signin-js";
});







