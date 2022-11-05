

const messageInput = document.querySelector("input");

messageInput.addEventListener("blur", (event) => {
    const length = event.target.value.length;
    const maxLength = parseInt(messageInput.getAttribute("data-length"))
    if (length == maxLength) {
        messageInput.classList.add("valid")
        messageInput.classList.remove("invalid");
    } else {
        messageInput.classList.remove("valid");
        messageInput.classList.add("invalid");
    }
});
