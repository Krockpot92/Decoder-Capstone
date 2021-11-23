// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
  let result = ''
  if (encode === true) {
    input = input.toLowerCase()
  }
  const theCode = {
    a: 11, b: 21, c: 31, d: 41, e: 51, f: 12, g: 22, h: 32, i: 42,
    j: 42, k: 52, l: 13, m: 23, n: 33, o: 43, p: 53, q: 14, r: 24,
    s: 34, t: 44, u: 54, v: 15, w: 25, x: 35, y: 45, z: 55
  }

  let letters = Object.keys(theCode)
  let numbers = Object.values(theCode)

  if (encode === false) {
    // checks for odd amount of numbers
    if ((input.length - input.split(" ").length - 1) % 2 === 1){
      return false
    }
    
    for (let i = 0; i < input.length; i++) {
      //check for spaces    
      let test = input.replace(" ", "")   
      let newInput = test[i * 2] + test[(i * 2) + 1]
       if (input[i*2] === " ") {
        result += " "
      }

      for (let j = 0; j < numbers.length; j++) {
        let number = numbers[j]
        if (number == newInput) {
          result += letters[j]
        }
      }
    }
  }

  if (encode === true) {
    for (let i = 0; i < input.length; i++) {
      let newInput = input[i]

      //adds spaces
      if(newInput === " "){
        result += newInput
      }

      //encodes numbers into letters
      for (let j = 0; j < letters.length; j++) {
        let letter = letters[j]
        if (letter === newInput) {
          result += numbers[j]
        }
      }
    }
  }

  return result
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
