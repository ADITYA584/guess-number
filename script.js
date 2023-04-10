'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(document.querySelector('.guess').value);
  //no input

  if (!guess) {
    document.querySelector('.message').textContent =
      'PLEASE MAKE A VALID GUESS';
  }

  //for all other condition
  else {
    //if guess is larger than number
    if (secretnumber < guess) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'TOO HIGH';
        score--;
        document.querySelector('.label-score span').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'GAME OVER';
        document.querySelector('.label-score span').textContent = 0;
      }
    }

    //if guess is equal to number
    else if (secretnumber === guess) {
      document.querySelector('.message ').textContent = 'CORRECT GUESS';
      if (score > Number(document.querySelector('.highscore').textContent)) {
        document.querySelector('.highscore').textContent = score;
      }

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretnumber;
      document.querySelector('.number').style.width = '30rem';
    }

    //if guess is smaller than number
    else {
      document.querySelector('.message').textContent = 'TOO LOW';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').textContent = 0;
  document.querySelector('.score').textContent = score;
});
