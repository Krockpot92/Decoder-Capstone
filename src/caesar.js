// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!input || !shift || shift> 25|| shift< -25 ||typeof input != 'string' || typeof shift != 'number'){
      return false
    }  
    if (encode === false){shift = -shift}    
    let result = ""

    for (let i = 0; i < input.length; i++){
      let ifLetter = true
      let newInput = input[i].toLowerCase()
      let test = newInput.charCodeAt()

      // checks for special characters
        if (test > 122 ||test < 97){
          result += newInput
            ifLetter = false
        }

      let newCode = test + shift
        // wraps alphabet around if needed
        if( newCode> 122){
          newCode = newCode - 26
        }
        if( newCode < 97){
          newCode = newCode + 26
        }  

      let newLetter = String.fromCharCode(newCode)
        if (ifLetter === true){
        result += newLetter}
      }
    return result
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
