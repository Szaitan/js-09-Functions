'use strict';
// To set a default value for parameters we can do it excatly as in Python by setting them in ()

const bookings = [];
const createBooking = function (flightNum = 0, numPassengers = 0, price = 0) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('Test00');
