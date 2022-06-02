'use strict';
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);
//openModal Function
const openModal = function () {
  console.log('button clicked');
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
//closeModal Function
const closeModal = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// btnClose.addEventListener('click', function () {
//   model.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
// overlay.addEventListener('click', function () {
//   model.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

//Listening to keyboard events
//there are three keyboard keys
//  keydown,keyup and key press
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (!model.classList.contains('hidden')) {
      closeModal();
    }
  }
  xc;
});
