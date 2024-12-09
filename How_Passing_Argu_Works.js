'use strict';

const flight = 'LH234';
const mike = {
  name: 'Mike Krep',
  passport: 1234567890,
};

function checkIn(flightNum, passenger) {
  flightNum = 'LH99';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 1234567890) {
    alert('Checked in');
  } else {
    alert('Worng passport!');
  }
}

checkIn(flight, mike);
console.log(flight); // LH234
console.log(mike); // {name: 'Mr. Mike Krep', ...}

// As we can see on in the sample above, what we pass
// to function as flight is value, and an object which we pass is
// the reference position to object in heap.
// Thats why we are affecting object but not value of flight
