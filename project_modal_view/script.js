'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
//if there are multiple hml tags use same css class and we want to list all of them then we use querySelectorAll to get all the elements in a nodeList.
const btnsOpenModal = document.querySelectorAll('.show-modal');
const closeModalBtnFunction = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
closeModalBtn.addEventListener('click', closeModalBtnFunction);
overlay.addEventListener('click', closeModalBtnFunction);
//add key press listener,this callback function will also have information in the event obect parameter for which key press its ben executed so we can filter the action for particular key withtin the function
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalBtnFunction();
  }
});
const modalBtnFunction = function () {
  //add or remove css class from html dom element, the classList method gives the list of css classes attached to a given html tag/dom element and by using add or remove we can add or remove css class to and from the html tag/dom element, this can also be done by manipuilting css properties directly from js but thats not good practice its better to use class to group css properties and then add or remove those classes to give effect to the webpage from js.
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', modalBtnFunction);
}
