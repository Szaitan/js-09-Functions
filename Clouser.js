'use strict';

// Clouser is when returned/signed function containes the function enviorment
// even after execution of parent function

function secureBooking() {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
}

const booker = secureBooking();
booker(); // 1
booker(); // 2
booker(); // 3

// But from global scope we dont have access to its internal variables
// However we can check what is inside of the clousre by using console.dir
console.dir(booker);
// [[]] means that we cant access it with our code

// Example 1
// Other approach with signing internal function
// to already created external variable with clouser
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 23);
  };
};
g(); // signing function to var f;
f(); // 46

// Example 2
// Here clouser is between boardPassengers and setTimout
// timeout is executing the function after time period and
// in the same time console.log executes "Will start boarding..."
// Clouser has priority over scope chain in case of variables.
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, 4000);

  console.log(`Will start boarding in ${wait} seconds`);
};
boardPassengers(180, 4000);
