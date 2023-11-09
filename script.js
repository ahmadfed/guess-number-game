'use strict';

//main variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Arrown Function
const displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        console.log(displayMessage('⛔ No Number'));

        // if winner
    } else if (guess === secretNumber) {
        displayMessage('Correct Number ✅');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.winner').textContent = 'You are winner'

        // high score maintenance
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore
        }

        // if guess is wrong
    } else if (guess !== secretNumber) {

        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too High☝️' : 'Too low 👇');
            score--
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lost the game');
        }
    }
})

// reseting the game
document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.winner').textContent = 'Guess My Number!';
})