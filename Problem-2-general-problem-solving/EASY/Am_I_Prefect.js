//Problem

// Am I Perfect?

// Write a function that tells if a given number is perfect or not. A number is called perfect if the sum of the factors of a number (excluding the number itself) is the number itself.
// Output
// Return “Perfect” if the number is perfect
// if the sum of factors is greater than the input return “Abundant”
// if the sum of factors is lesser than the input return “Deficient”.

// Solution:-

function amIPrefect(num) {

  if (typeof num != "number") {
    return "Please enter valid number";
  }

  let factArr = [];

  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      factArr.push(i);
    }
  }

  let factSum = 0;

  for (let i = 0; i < factArr.length; i++) {
    factSum += factArr[i];
  }

  if (factSum == num) {
    return "Perfect";
  } else if (factSum > num) {
    return "Abundant";
  } else {
    return "Deficient";
  }
  
}

let res = amIPrefect(8);
console.log(res);
