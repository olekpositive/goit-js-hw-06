
const messageInput = document.querySelector('input');
const log = document.getElementById('name-output');


const handleMessageInput = (event) => {
    let inputValue = event.target.value;

    if (inputValue == '') {
        inputValue = 'Anonymous';
    }
    log.textContent = inputValue;

};
messageInput.addEventListener("input", handleMessageInput);
