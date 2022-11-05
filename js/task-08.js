

const form = document.querySelector("form.login-form");

form.login-form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("sorry...Please Enter Username and Passowrd");
    }

    console.log(`email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}