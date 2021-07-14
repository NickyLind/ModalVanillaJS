'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const toggleModal = () => {
  modal.classList.toggle('hidden')
  overlay.classList.toggle('hidden')
}

const removeModalOutsideClick = () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')  
}

for(let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', toggleModal);
};

btnCloseModal.addEventListener('click', toggleModal);

overlay.addEventListener('click', removeModalOutsideClick)