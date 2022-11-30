const repeatString = function (string, num) {
  let final = "";

  if (num < 0) {
    return "ERROR";  //returns ERROR if passed a negative number - ZL
  } else {
    for (i = num; i > 0; i--) {
      final += string;
    }
    return final;
  }
};

// Do not edit below this line
module.exports = repeatString;
