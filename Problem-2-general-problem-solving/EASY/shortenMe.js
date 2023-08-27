// Problem

// Implement 2 functions, one that shortens a string of values by replacing consecutive data elements with just one data value and count of the consecutive values.

// For Example, we can shorten the characters “AAAAAAAAAAABWWWWWWWWWWWBB” with “11AB11W2B”

// The other function should take the shortened string and give back the original value

// For example, we take the above-shortened characters “11AB11W2B” and get back “AAAAAAAAAAABWWWWWWWWWWWBB”

// For simplicity, you can assume that the unencoded string will only contain the letters A through Z (either lower or upper case) and whitespace. This way data to be encoded will never contain any numbers and numbers inside data to be decoded always represent the count for the following character.

// Solution:-

function makeMeShorter(input) {
  let ans = "";
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] == input[i + 1]) {
      count++;
    } else {
      if (count == 1) {
        ans += input[i];
        count = 1;
      } else {
        ans += count + input[i];
        count = 1;
      }
    }
  }
  return ans;
}

function makeMeLonger(input) {
  let ans = "";
  let count = "";

  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (isNaN(char)) {
      let rep = count || 1;
      let bag = "";
      for (let j = 0; j < rep; j++) {
        bag += char;
      }
      ans += bag;
      count = "";
    } else {
      count += input[i];
    }
  }

  return ans;
}

let res1 = makeMeShorter("AAAAAAAAAAABWWWWWWWWWWWBB");
console.log(res);

