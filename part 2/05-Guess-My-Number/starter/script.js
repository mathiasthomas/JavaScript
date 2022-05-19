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
const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const quesss = Number(document.querySelector('.guess').value);
  console.log(quesss);
  if (!quesss) {
    document.querySelector('.message').textContent = '🚨 Please Insert Number';
  } else if (quesss === number) {
    document.querySelector('.message').textContent =
      '💕 Congrats, Corect Number!!!!';
  } else if (quesss > number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '⛔  Sorry Quess Is Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💔💔  Failed!!! You Lost The Game';
    }
  } else if (quesss < number) {
    document.querySelector('.message').textContent =
      ' ❌ Sorry Quess Is Too Low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
