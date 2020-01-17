const inputElement = document.querySelector('#nameInput');
const buttonElement = document.querySelector('#setNewName');
const nameElement = document.querySelector('#name');

function setNewNameFunction() {
    const name = inputElement.value;

    nameElement.textContent = name;
};

buttonElement.addEventListener('click', setNewNameFunction);

inputElement.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        setNewNameFunction();
    }
});