const sumAll = function () {
  let sumTotal = 0;

  if (
    typeof arguments[0] != "number" ||
    typeof arguments[1] != "number" ||
    arguments[0] < 0 ||
    arguments[1] < 0
  ) {
    return "ERROR";
  } else {
    if (arguments[0] < arguments[1]) {
      for (i = arguments[0]; i <= arguments[1]; i++) {
        sumTotal += i;
      }
      return sumTotal;
    } else {
      for (i = arguments[1]; i <= arguments[0]; i++) {
        sumTotal += i;
      }
      return sumTotal;
    }
  }
};

// Do not edit below this line
module.exports = sumAll;
