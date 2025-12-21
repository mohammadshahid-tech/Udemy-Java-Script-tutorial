'use strict';



let score = 20;
let highestScore = 0;
document.querySelector('.check').addEventListener('click', GameRules)

function GameRules() {
    document.body.style.backgroundColor = '#222f';
    let gameNumber = Math.floor(Math.random() * 20) + 1
    let GuesNumber = Number(document.querySelector(".guess").value);

    if (score <= 0) {
        document.querySelector('.number').textContent = 'Game Over';
        document.querySelector('.check').disabled = true;
        document.querySelector('.check').style.backgroundColor = "red";
        return;
    } else {
        if ((GuesNumber > 20) || (GuesNumber < 1) || isNaN(GuesNumber)) {
            document.querySelector('.between').textContent = "Number Between 1 to 20 Only";
            return;
        } else {
            if (GuesNumber === gameNumber) {

                if (score > highestScore) {
                    highestScore = score;
                    document.querySelector('.highscore').textContent = highestScore;
                }
                score--
                document.querySelector('.score').textContent = score;
                document.querySelector('.message').textContent = 'Correct Number!';
                document.body.style.backgroundColor = "green"
            } else {
                score--;
                document.querySelector('.score').textContent = score;
                document.querySelector(".message").textContent = "Start guessing...";
                if (gameNumber > GuesNumber) {
                    document.querySelector('.message').textContent = 'Too Low';
                } else {
                    document.querySelector('.message').textContent = 'Too High';
                }
            }


            if (score === 0) {
                document.querySelector('.number').textContent = 'Game Over';
                document.querySelector('.check').disabled = true;
                document.querySelector('.check').style.backgroundColor = 'red';
            }
        }
    }
}
document.querySelector('.again').addEventListener('click', TryAgain)
function TryAgain() {
    score = 20
    document.querySelector('.score').textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.check').style.backgroundColor = " #eee";
    console.clear();
}






