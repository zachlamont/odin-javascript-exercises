const removeFromArray = function () {
  array = arguments[0];

  for (i = 1; i < arguments.length; i++) {
    if (array.includes(arguments[i])) {
      //if argument is included in the array
      array.splice(array.indexOf(arguments[i]), 1); // remove that element
    }
  }
  return array; //Success on the first try :) - ZL
};

// Do not edit below this line
module.exports = removeFromArray;
