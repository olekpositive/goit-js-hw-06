

const form = document.querySelector("form.login-form");
form.login-form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("sorry...Please Enter Email and Passowrd");
    }

    const credentials = {
        email: email.value,
        password: password.value,
    };
    console.log(credentials);
    event.currentTarget.reset();
}

