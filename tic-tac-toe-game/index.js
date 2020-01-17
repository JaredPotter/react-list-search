const bannerElement = document.querySelector('#banner');
const resetGameButtonElement = document.querySelector('#resetGame');
const squareButtonElements = document.querySelectorAll('.square'); 
let currentPlayersTurn = 'X';
let isGameOver = false;
let turnCount = 0;
bannerElement.textContent = `Current Player's Turn: ${currentPlayersTurn}`;


const playSoundButtonElement = document.querySelector('#playSound');
playSoundButtonElement.addEventListener('click', function() {
    var audio = new Audio('audio.mp3');
    audio.play();
});



for(let i = 0; i < squareButtonElements.length; i++) {
    const squareButtonElement = squareButtonElements[i];

    squareButtonElement.addEventListener('click', function(event) {
        console.log('Square ' + (i + 1) + ' Clicked!');
        const element = event.target;
        const currentValue = element.textContent;

        if(currentValue !== '' || isGameOver) {
            return;
        }

        turnCount++;

        if(currentPlayersTurn === 'X') {
            element.textContent = 'X';
            checkForWinner(currentPlayersTurn);
            currentPlayersTurn = 'O';
        }
        else {
            element.textContent = 'O';
            checkForWinner(currentPlayersTurn);
            currentPlayersTurn = 'X';
        }

        if(!isGameOver && turnCount !== 9) {
            bannerElement.textContent = `Current Player's Turn: ${currentPlayersTurn}`;
        }

        if(turnCount === 9) {
            isGameOver = true;
        }
    });
}

resetGameButtonElement.addEventListener('click', function() {
    // Clear all squares.
    squareButtonElements.forEach((squareElement) => {
        squareElement.textContent = '';
    });

    isGameOver = false;
    currentPlayersTurn = 'X';
    turnCount = 0;
    bannerElement.textContent = `Current Player's Turn: ${currentPlayersTurn}`;
});

function checkForWinner(player) {
    const square1Value = squareButtonElements[0].textContent;
    const square2Value = squareButtonElements[1].textContent;
    const square3Value = squareButtonElements[2].textContent;
    const square4Value = squareButtonElements[3].textContent;
    const square5Value = squareButtonElements[4].textContent;
    const square6Value = squareButtonElements[5].textContent;
    const square7Value = squareButtonElements[6].textContent;
    const square8Value = squareButtonElements[7].textContent;
    const square9Value = squareButtonElements[8].textContent;

    debugger;

    if(square1Value === player && square2Value === player && square3Value === player) {
        isGameOver = true;
    }
    // else if(...) {

    // }
    // else if(...) {

    // }

    if(isGameOver) {
        bannerElement.textContent = `PLAYER ${player} is the winner!`;
    }
    else if(turnCount === 9) {
        isGameOver = true;
        bannerElement.textContent = 'GAME TIE';
    }
}