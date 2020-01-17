const gridElement = document.querySelector('#grid');

let playersTurn = 'X';

for(let i = 0; i < 9; i++) {
    const squareElement = document.createElement('button');
    squareElement.classList.add('square');
    squareElement.id = i;

    squareElement.addEventListener('click', function() {
        if(squareElement.textContent === '') {
            if(playersTurn === 'X') {
                squareElement.textContent = 'X';
    
                playersTurn = 'O';
            }
            else {
                squareElement.textContent = 'O';
    
                playersTurn = 'X';
            }
        }
    });

    gridElement.append(squareElement);
}

function checkForWinner() {
    
}

// if(squareElement) {
//     squareElement.addEventListener('click', function() {
//         const currentValue = squareElement.textContent;

//         if(currentValue === '') {
//             squareElement.textContent = 'X';
//         }
//         else if(currentValue === 'X') {
//             squareElement.textContent = 'O';
//         }
//         else {
//             squareElement.textContent = '';
//         }
//     });
// }
