'use strict';

// Immediately invoke functions expresions
// Are function which are invoke only once

(function () {
  console.log('This will never run again!');
  // Data here is called encapsulated
  const isPrivate = 24;
})();
