function displaySum() {
  // if no argument
  if (arguments.length == 0) {
    console.log("No argument is passed.");
  }

  // if only one argument
  else if (arguments.length == 1) {
    console.log("You have to pass at least two arguments to perform addition.");
  }

  // multiple arguments
  else {
    let sum = 0;
    let length = arguments.length;
    for (var i = 0; i < length; i++) {
      sum = sum + arguments[i];
    }
    console.log("Sum is " + sum);
  }
}

displaySum(); //call function with no parameter
displaySum(3); //call function with one parameter
displaySum(4, 5); //call function with two parameters
displaySum(3, 5, 7, 2, 9, 7, 8); //call function with multiple parameters
