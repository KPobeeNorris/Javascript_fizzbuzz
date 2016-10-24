// var Fizzbuzz = function() {};

isDivisibleByThree = function (number) {
  return number % 3 == 0;
};

isDivisibleByFive = function (number) {
  return number % 5 == 0;
};

fizzBuzz = function(number) {
  if (isDivisibleByThree(number) && isDivisibleByFive(number)){
  return "fizzbuzz";
}
  else if (isDivisibleByFive(number)) {
  return "buzz";
}
  else if (isDivisibleByThree(number)) {
  return "fizz";
}
};
