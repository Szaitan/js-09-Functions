'use strict';

// In Python we had this lesson with Clouser

function great(greetings) {
  return function (name) {
    console.log(`${greetings} ${name}`);
  };
}

// By calling first time our function first argument
// is saved inside of the function
const greatHey = great('Hey');
greatHey('Mike');

// We can use multiple call to see final result
great('Greatings')('Friends!');

// Below function using arrow function
const great1 = greetings => name => console.log(`${greetings} ${name}`);
great1('Greatings')('Friends!');
