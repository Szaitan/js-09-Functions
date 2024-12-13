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

// Here we call method .call() and pass object (eurowings) for .this argument
// Because of that it was able to understand to which object data should be passed
// important thing is that function whould be used between objects with similar structure
book.call(eurowings, 'Mike', 666);
console.log(eurowings); // Object { name: "EuroWings", iataCode: "EW", bookings: (1) […] }

//There is also apply method which is no longer used
// Apply is taking after this object array
book.apply(eurowings, ['Mike', 666]);
console.log(eurowings);
