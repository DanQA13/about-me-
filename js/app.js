'use strict';
let score = 0;
let username;
function FunOne() {
 username = prompt('Welcome and Hello my name is Daniel Cornier! What is your name? ');
  alert(`Hello ${username}!I hope you learn something about me while you visit my page `);
};
FunOne();
alert('Before you click ok in this window read my bio because im going to quiz you on some info about me. ');
function FunTwo() {
let questionOne = prompt(
  'Judging on my bio do you think a dog would be my favorite animal?'
).toUpperCase();
if (questionOne === 'YES' || questionOne === 'Y') {
  alert('You are right' + ' ' + username + ' ,' + 'I love dogs!');
    score++;
}   else {
 alert('Sorry wrong answer, try and read a little closer next time dogs are my favorite.');
}
}
FunTwo();
function FunThree() {
let questionTwo = prompt('Do you love dogs?').toUpperCase();
if (questionTwo === 'YES' || questionTwo === 'Y') {
  alert('Then you have come to the right place! We can definitely be friends.');
  score++;
  
} else {
  alert('ugh idk, I may have to rethink this friendship');
} 
} FunFour();
function FunFour() {
let question3 = prompt('Since this relationship may or not be going places, lets see if we can take it to the next level. Was I in the Army?').toUpperCase();
if (question3 === 'NO' || question3 === 'N') {
  alert('You truly are listening when I speak' +
  ' ' +
  username +
  ' ' +
  'We are going places');
  score++;
} else {
  alert('WRONG MARINE CORPS!!! Ill give you a pass on this one. Some people generalize the branches of the military with the Army');
}
} FunFive();
function FunFive() {
let question4 = prompt(username + ' ' + 'As I take a knee Will you marry me?').toUpperCase();
if (question4 === 'YES' || question4 === 'Y') {
  alert('Whoa pump the breaks!!!! I was just kidding, you move quickly!');
} else {
  alert("Good! I didn't want to anyway");
  score++;
}
} FunSix();
function FunSix() {
let attempts = 1;
for (let i = 4; i >= attempts; i--) {
  let correctAnswer = 7;
  let numberMachine = parseInt(prompt('Guess a number between 1-20'));
  if (numberMachine === correctAnswer) {
    alert('You are correct');
    score++;
    break;
  } else if (numberMachine < correctAnswer) {
    alert(`Your guess is too low. You have ${i - 1} attempts remaining.`);
  } else if (numberMachine > correctAnswer) {
    alert(`Your guess is too high. You have ${i} attempts remaining.`);
  }
  if (i === 1) {
    alert(`The correct answer was ${correctAnswer},`);
  }
}
} FunSeven();
function FunSeven() {
let favFood = ['steak', 'sushi', 'bbq', 'italian', 'spanish food'];
let guesses = 0;
let correct = false;
for (let k = 6; k > guesses; k--) {
  let abort = false;
  let userInput = prompt('What is one of my favorite foods?');
  for (let j = 0; j < favFood.length; j++) {
    if (userInput.toLowerCase() === favFood[j]) {
      alert('That is correct!');
      score++;
      correct = true;
    }
  }
  if (!correct) {
    alert(`Incorrect You have ${[k - 1]} guesses left.`);
  }
  if (correct) break;
}
} FinalScore();
let favFood;
function FinalScore() {
alert(`Your score was ${score} out of 7 Great job`);
let favFood = ['steak', 'sushi', 'bbq', 'italian', 'spanish food'];alert(
  `Just in case you want to know, all of the correct answers were ${favFood}`
);
}