'use strict';

const oneWord = function (str) {
  return str.replaceAll(' ', '');
};

const UpperWordFirst = function (str) {
  const [firstWord, ...rest] = str.split(' ');
  return [firstWord.toUpperCase(), ...rest].join(' ');
};

// Higher order function
// Function which takes function as argument

function transformer(str, fun) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fun(str)}`);
  // As we can see fuction have their own properties, like .name
  console.log(`Name of function: ${fun.name}`);
}

// Here we can see that function was pass as back function,
// which will be call later
transformer('Lotniskowiec, dupa i wroniec.', UpperWordFirst);

// Good the know there is method: .forEach()
// which will callback function for elements in array
function high5(str) {
  console.log(str.toLowerCase());
}
['Jonas', 'Mike', 'Adam'].forEach(high5);
