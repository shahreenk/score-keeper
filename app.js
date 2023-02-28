const player1Btn = document.querySelector('#player1-btn');
const player2Btn = document.querySelector('#player2-btn');
const resetBtn = document.querySelector('#reset');
const player1Display = document.querySelector('#player1-display');
const player2Display = document.querySelector('#player2-display');
const winningScoreSelect = document.querySelector('#play-to');

let player1Score = 0;
let player2Score = 0;
let winningScore = 3;
let isGameOver = false;

player1Btn.addEventListener('click', function(){
    if (!isGameOver) {
        player1Score += 1;
        if (player1Score === winningScore) {
            isGameOver = true;
            player1Display.classList.add('has-text-success');
            player2Display.classList.add('has-text-danger');
            player1Btn.disabled = true;
            player2Btn.disabled = true;
        }
        player1Display.textContent = player1Score;
    }
})

player2Btn.addEventListener('click', function(){
    if (!isGameOver) {
        player2Score += 1;
        if (player2Score === winningScore) {
            isGameOver = true;
            player1Display.classList.add('has-text-danger');
            player2Display.classList.add('has-text-success');
            player1Btn.disabled = true;
            player2Btn.disabled = true;
        }
        player2Display.textContent = player2Score;
    }
})

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    player1Score = 0;
    player2Score = 0;
    player1Display.textContent = 0;
    player2Display.textContent = 0;
    player1Display.classList.remove('has-text-success', 'has-text-danger');
    player2Display.classList.remove('has-text-danger', 'has-text-success');
    player1Btn.disabled = false;
    player2Btn.disabled = false;
}