'use strict';

const luffthansa = {
  name: 'Luftahansa',
  iataCode: 'LH',
  bookings: [],
  book(name, number) {
    console.log(
      `${name} booked a seat on ${this.name} flight ${this.iataCode}${number}`
    );
    this.bookings.push({ flight: `${this.iataCode}${number}`, name });
  },
};

luffthansa.book('Gogoś', 123);
console.log(luffthansa); // Object { name: "Luftahansa", iataCode: "LH", bookings: (1) […], book: book(name, number) }

//Because function is an object its has own methods
// One of those is call, which allows to use objects methods
const eurowings = {
  name: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

// As we can see we saved function as an variable
const book = luffthansa.book;

// Call Method
// Here we call method .call() and pass object (eurowings) as .this argument
// Because of that it was able to understand to which object data should be passed
// Important thing is that function should be used between objects with similar structureor it will not work
book.call(eurowings, 'Mike', 666);
console.log(eurowings); // Object { name: "EuroWings", iataCode: "EW", bookings: (1) […] }

// Apply method
// There is also apply method which is no longer used
// Apply is taking after "this" object array with arguments to use
book.apply(eurowings, ['Mike', 666]);
console.log(eurowings);

// Bind Method
// Bind method is similar to call method
// The diffrence is that its not inovking function at start and its returning new function
luffthansa.plaines = 300;

const bookEW = book.bind(eurowings);
bookEW('Timmoty', 666);

// Partial Application
// By using bind we can pass arguments during creation of it
// It's called "Partial Application"
const bookEW12 = book.bind(eurowings, 'Ragnar');
bookEW12(1234);
console.log(eurowings);

// Bind Method and Event Listener
// Becasuse .this is dynamicaly change, bind allows us to lock it to target function
// First lets create function to add planes
luffthansa.addPlaine = function () {
  console.log(this);
  this.plaines++;
  console.log(this.plaines);
};

// If we would do this like this, log would show us that "this" is button object
// document.querySelector('.buy').addEventListener('click', luffthansa.addPlaine);

// correct solution
// We return a function with bind, which this is set as lufthansa object
document
  .querySelector('.buy')
  .addEventListener('click', luffthansa.addPlaine.bind(luffthansa));
