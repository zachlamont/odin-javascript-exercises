const reverseString = function (string) {
  let newString = [...string];

  let reversed = "";

  for (i = 0; i < string.length; i++) {
    reversed += newString.pop();
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
