'use strict';
let score = 0;
let currentScore0;
let HoldScorePlayer0;
let currentScore1;
let HoldScorePlayer1;


// document.querySelector(".player--0").classList.add('player--active')
// document.querySelector(".player--1").classList.add('player--active')

//on click roll dice 
document.querySelector('.btn--roll').addEventListener('click', RollDice)
document.querySelector('.btn--hold').addEventListener('click', HoldScore)
document.querySelector('.btn--new').addEventListener('click', NewGame)

let activePlayer0 = document.querySelector(".player--0").classList.contains("player--active");
let activePlayer1 = document.querySelector(".player--1").classList.contains("player--active");

currentScore0 = document.querySelector('#current--0');
HoldScorePlayer0 = document.querySelector('#score--0');
HoldScorePlayer0.textContent = 0

currentScore1 = document.querySelector('#current--1');
HoldScorePlayer1 = document.querySelector('#score--1');
HoldScorePlayer1.textContent = 0

function HoldScore() {

    if (activePlayer0) {
        HoldScorePlayer0.textContent = currentScore0.textContent;
    }
    if (activePlayer1) {
        HoldScorePlayer1.textContent = currentScore1.textContent;
    }

}
function NewGame() {
    currentScore0.textContent = 0
    currentScore1.textContent = 0
    HoldScorePlayer0.textContent = 0;
    HoldScorePlayer1.textContent = 0;

}

// roll dice function
function RollDice() {
    //random number generating
    let rollDiceNumber = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').src = `dice-${rollDiceNumber}.png`
    if (rollDiceNumber !== 1) {
        //add the diceroll number to score
        score += rollDiceNumber
        if (activePlayer0) {
            currentScore0.textContent = score
        }
        if (activePlayer1) {
            currentScore1.textContent = score
        }

    } else {
        if (activePlayer0) {
            document.querySelector(".player--0").classList.remove('player--active')
            document.querySelector(".player--1").classList.add('player--active')

        }
        if (activePlayer1) {
            document.querySelector(".player--1").classList.remove('player--active')
            document.querySelector(".player--0").classList.add('player--active')
        }
    }
}