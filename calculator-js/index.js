console.log('Hello, World!');

const valueAElement = document.querySelector('#valueA');
const valueBElement = document.querySelector('#valueB');

const addButtonElement = document.querySelector('#add');
const subtractButtonElement = document.querySelector('#subtract');
const divideButtonElement = document.querySelector('#divide');
const multiplyButtonElement = document.querySelector('#multiply');

const resultsElement = document.querySelector('#results');

addButtonElement.addEventListener('click', function() {
    const values = getValues(valueAElement, valueBElement);
    const result = values.a + values.b;

    resultsElement.textContent = result;
});

function getValues(elementA, elementB) {
    const valueA = Number(elementA.value);
    const valueB = Number(elementB.value);

    const resultObject = {
        a: valueB,
        b: valueA
    };

    return resultObject;
}
