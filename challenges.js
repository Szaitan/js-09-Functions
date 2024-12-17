'use strict';

// Poll object
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const userAnswer = Number(
      prompt([this.question, ...this.options, 'Write a number:'].join('\n'))
    );
    userAnswer > this.options.length - 1 || userAnswer < 0
      ? alert('Please state correct number')
      : this.answers[userAnswer]++;
    this.displayResults();
  },

  displayResults(type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else if (type === 'array') {
      console.log(this.answers);
    }
  },
};

// displayResults
// Here we are passing an object as "this" nad next we can pass "string or "array" argument
poll.displayResults.call({ answers: [1, 2, 3, 4] });

// Eventlistener
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// Challenge 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener("click", function() {
    header.style.color = "blue"
  })
  })();