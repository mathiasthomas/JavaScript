'use strict';
// domument object models ()
// console.log(document.querySelector('.message').textContent);
/*
 document.querySelector('.guess').value;
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 170;
document.querySelector('.guess').value = 23;
*/

//events handling
let number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const quesss = Number(document.querySelector('.guess').value);
  console.log(quesss);
  if (!quesss) {
    document.querySelector('.message').textContent = '🚨 Please Insert Number';
    //when player wins
  } else if (quesss === number) {
    document.querySelector('.message').textContent =
      '💕 Congrats, Corect Number!!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess is too high
  } else if (quesss > number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '⛔  Sorry Quess Is Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💔💔  Failed!!! You Lost The Game';
      document.querySelector('score').textContent = 0;
    }
    //when guess is too low
  } else if (quesss < number) {
    document.querySelector('.message').textContent =
      ' ❌ Sorry Quess Is Too Low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

//restore defaults
document.querySelector('.again').addEventListener('click', function () {
  let number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = ' Start Guessing,,,,,';
});
