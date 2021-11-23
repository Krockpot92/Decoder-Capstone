// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    const normalAlphabet = "abcdefghijklmnopqrstuvwxyz"
    let result = ""
    if (!alphabet){return false}
    if (alphabet.length != 26 || typeof alphabet != 'string'){ return false}

    // checks for double characters
    for (let i =0; i< alphabet.length; i++){
      if ( alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i]) ) {
      return false
      }
    }

    for(let i =0; i< input.length; i++){
      let newInput = input[i].toLowerCase()
      let ifLetter = true
      
      //checks for spaces
      if (newInput === " "){
        result += newInput
        ifLetter = false
      }
      if (ifLetter === true){
        if(encode === true){
          let found = normalAlphabet.search(newInput)
          result += alphabet[found]
          }
          else{ let found = alphabet.search(newInput)
              result += normalAlphabet[found]}
      }
    }
    if(result.includes(undefined)){return false}
    return result
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
