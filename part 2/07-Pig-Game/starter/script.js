'use strict';
//selecting elements with id
let score0El = document.querySelector('#score--0');
//selecting elements with id only
let score1El = document.getElementById('score--1');
//select dice class
let diceEl = document.querySelector('.dice');
//select alla buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//reset score to zero at game start
score0El.textContent = 0;
score1El.textContent = 0;
//hide dice image at game start
diceEl.classList.add('hidden');
//rolling dice functionallity
btnRoll.addEventListener('click', function () {
  // 1. generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. check for roll 1 if true switch to next player
});
