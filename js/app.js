'use strict';
let score = 0;
alert(
  'Welcome and Hello my name is Daniel Cornier! I hope you learn something about me while you visit my page'
);
function Question1() {
let username = prompt('What is your name?');
//console.log(username);
alert(
  'Great to meet you' +
    ' ' +
    username +
    '. ' +
    'Before you click ok in this window read my bio because im going to quiz you on some info about me. '
);
score++;
question2();
}
function question2() {
let answer1 = prompt(
  'Judging on my bio do you think a dog would be my favorite animal?'
);
//console.log(answer1);
if (answer1.toLowerCase() == 'Yes' || answer1 == 'Y') {
  alert('You are right' + ' ' + username + ' ,' + 'I love dogs!');
  score++;
  question3();
} else if (answer1.toLowerCase() === 'No' || answer1 === 'N') {
  alert(
    'Sorry wrong answer, try and read a little closer next time dogs are my favorite'
  );
}
}
function question3() {
let answer2 = prompt('Do you love dogs?');
//console.log(answer2);
if (answer2.toLowerCase() === 'Yes' || answer2 === 'Y') {
  alert('Then you have come to the right place! We can definitely be friends.');
  score++;
  question4();
} else if (answer2.toLowerCase() === 'No' || answer2 === 'N') {
  alert('ugh idk, I may have to rethink this friendship');
}
}
function question4() {
let answer3 = prompt(
  'Since this relationship may or not be going places, lets see if we can take it to the next level. Was I in the Army?'
);
//console.log(answer3);
if (answer3.toLowerCase() === 'No' || answer3 === 'N') {
  alert(
    'You truly are listening when I speak' +
      ' ' +
      username +
      ' ' +
      'We are going places'
  );
  score++;
  question5();
} else if (answer3.toLowerCase() === 'Yes' || answer3 === 'Y') {
  alert(
    'WRONG MARINE CORPS!!! Ill give you a pass on this one. Some people generalize the branches of the military with the Army'
  );
}

let answer4 = prompt(username + ' ' + 'As I take a knee Will you marry me?');
//console.log(answer4);
if (answer4.toLowerCase() === 'Yes' || answer4 === 'Y') {
  alert('whoa pump the breaks! I was just kidding, you move quickly!');
  score++;
} else if (answer4.toLowerCase() === 'No' || answer4 === 'N') {
  alert("Good! I didn't want to anyway ");
}

let attempts = 1;
for (let i = 4; i >= attempts; i--) {
  let correctAnswer = 8;
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

let favFood = ['steak', 'sushi', 'bbq', 'italian', 'spanish food'];
//let userInput = prompt('What was a sport I played growing up?');
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

alert(`Your score was ${score} out of 7 Great job`);
alert(
  `Just in case you want to know, all of the correct answers were ${favFood}`
);
