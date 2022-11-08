// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  let password = '';

  //Prompt user for requirements
  let pwLen = Number(prompt("What is the length of the password? (8-128 characters)"));
    if (pwLen < 8 || pwLen > 128 || !pwLen) {
      alert("Invalid Password Length.");
      return
    }
  console.log(pwLen);
  
  //define numeric and special chars to add
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*().,';
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  //array of valid answers
  const validChars = ["lowercase", "uppercase", "numeric", "special"];
  //validated output
  let validCharArr = [];
  //user input
  let charTypes = prompt("Which character types would you like to include?\nPlease enter any of the following:\nLowercase, Uppercase, Numeric, Special");

  //Changes string to array for validation, uses regex to remove commas, spaces, and 'and'.
  charTypes = charTypes.toLowerCase().split(/\,\s+and\s+|\s+and\s+|\,\s+|\,|\s+/);
  
  //validates input against valid array, builds new array of valid answers
  for (let i = 0; i < charTypes.length; i++) {
    let isValidChar = validChars.includes(charTypes[i]);
    if (isValidChar) {
      validCharArr.push(charTypes[i]);
    }
  }

  //returns if no valid input
  if (validCharArr.length === 0) {
    alert("Invalid number of character types selected.");
    return
  }

  //confirms the character requirements for the password
  let useUpper = validCharArr.includes('uppercase');
  let useLower = validCharArr.includes('lowercase');
  let useNumeric = validCharArr.includes('numeric');
  let useSpecial = validCharArr.includes('special');

  //builds string of all possible password characters based on user input
  let pwStr = '';
  if (useUpper) {
    pwStr = pwStr + upperChars;
  }
  if (useLower) {
    pwStr = pwStr + lowerChars;
  }
  if (useNumeric) {
    pwStr = pwStr + numericChars;
  }
  if (useSpecial) {
    pwStr = pwStr + specialChars;
  }

  //Generate Password function
  function GeneratePassword(arr, len) {
    let pass = '';
    let pwArr = arr.split('');
    let randomPos = 0;
    
    for (let j = 0; j < len; j++) {
      randomPos = Math.floor(Math.random() * arr.length)
      pass = pass + (pwArr[randomPos]);
    }

    return pass
  }

  password = GeneratePassword(pwStr, pwLen);
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* 
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/
