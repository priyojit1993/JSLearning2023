'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = Number(document.querySelector('.highscore').textContent);
let score = Number(document.querySelector('.score').textContent);
//method on document object to select a css elemet
// if its a css class then we use . and if its id we use # just like css
// //slecting and manipulating elemet
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = secretNumber;

//handling event
//event is some event/action that happens on the page for example mouse click or mouse hover or key press with event listener we can wait for some event and then execute a code for that particular event
const checkButtonFunction = () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = `🚫 No Number`;
  } else if (guess === secretNumber) {
    if (score > highScore) {
      //if we mention . in query selector it selects css class but if no . mentioned then it selects the html tag by name
      document.querySelector('body').style.backgroundColor = ' #60b347';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      highScore = score;
      console.log(`score is ${score}`);
      console.log(`high score is ${highScore}`);
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.message').textContent = `🎉 Correct number`;
  } else if (guess > secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = `📈 Too High!`;
  } else if (guess < secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = `📉 Too Low!`;
  }
  if (score < 0) {
    document.querySelector('.message').textContent = `☹️ You Lost the game`;
    document.querySelector('.score').textContent = 0;
  }
};

const againButtonFunction = function () {
  document.querySelector('body').style.backgroundColor = ' #a6aaa3';
  score = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
};

// event handler like addEvenetListener takes 2 parameter as input 1. the event for which it will be triggerd and 2. a callback function which is a function that we define and pass as argument to the javascript event handler but when the event occurs it is the duty of the javascript to call that function and execute the code inside it such kind of function is called call back function
document.querySelector('.check').addEventListener('click', checkButtonFunction);

document.querySelector('.again').addEventListener('click', againButtonFunction);
