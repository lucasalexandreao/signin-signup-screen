// Botões de troca de conteúdo (login e cadastro)
var signupButton = document.querySelector("#signup");
var signinButton = document.querySelector("#signin");

// Formulários
var signupForm = document.querySelector("#signup-form");
var signinForm = document.querySelector("#signin-form");

// Inputs e Submit de cadastro
var signupNameInput = document.querySelector("#signup-name");
var signupEmailInput = document.querySelector("#signup-email");
var signupPasswordInput = document.querySelector("#signup-password");
var signupSubmit = document.querySelector("#signup-submit");

// Inputs e Submit de login
var signinEmailInput = document.querySelector("#signin-email");
var signinPasswordInput = document.querySelector("#signin-password");
var signinSubmit = document.querySelector("#signin-submit");

// Mensagens de erro no cadastro
var signupNameErrorMessage = document.querySelector("#signup-name-error-message");
var signupEmailErrorMessage = document.querySelector("#signup-email-error-message");
var signupPasswordErrorMessage = document.querySelector("#signup-password-error-message");

// Mensagens de erro no login
var signinEmailErrorMessage = document.querySelector("#signin-email-error-message");
var signinPasswordErrorMessage = document.querySelector("#signin-password-error-message");

var body = document.querySelector("body");

// Função para validar email
function validateEmail(email) {
    const emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex para determinar formato de string

    return emailPattern.test(email);
}


// Função para validar email e senha de formulário
function validateForm(emailInput, passwordInput, emailErrorMessage, passwordErrorMessage) {
    var validEmail = false;
    var validPassword = false;

    if(validateEmail(emailInput.value)) {
        if(emailErrorMessage.classList.contains("error")) {
            emailErrorMessage.classList.remove("error");
            emailErrorMessage.textContent = "";
        }
        validEmail = true;
    } else {
        emailErrorMessage.classList.add("error");
        emailErrorMessage.textContent = "Email inválido!";
    }

    if(passwordInput.value.length >= 6) {
        if(passwordErrorMessage.classList.contains("error")) {
            passwordErrorMessage.classList.remove("error");
            passwordErrorMessage.textContent = "";
        }
        validPassword = true;
    } else {
        passwordErrorMessage.classList.add("error");
        passwordErrorMessage.textContent = "Senha inválida!";
    }

    if(validEmail && validPassword) {
        return true;
    }
    return false;
}

// Realiza a validação de email e senha do formulário de login
signinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if(validateForm(signinEmailInput, signinPasswordInput, signinEmailErrorMessage, signinPasswordErrorMessage)) {
        event.currentTarget.submit();
    }
});

// Realiza a validação de nome, email e senha do formulário de cadastro
signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    var validName = false;

    if(signupNameInput.value.length > 0) {
        if(signupNameErrorMessage.classList.contains("error")) {
            signupNameErrorMessage.classList.remove("error");
            signupNameErrorMessage.textContent = "";
            validName = true;
        }
    } else {
        signupNameErrorMessage.classList.add("error");
        signupNameErrorMessage.textContent = "Nome inválido!";
    }

    if(validateForm(signupEmailInput, signupPasswordInput, signupEmailErrorMessage, signupPasswordErrorMessage) && validName) {
        event.currentTarget.submit();
    }
});

// Permite a troca de tela (login para cadastro) por CSS
signupButton.addEventListener("click", () => {
    body.className = "signup-js";
});

// Permite a troca de tela (cadastro para login) por CSS
signinButton.addEventListener("click", () => {
    body.className = "signin-js";
});
