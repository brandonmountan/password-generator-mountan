// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

var lengthAnswer = prompt('Please enter a numeric value between 8 and 128 to determine the length of your password');

if (lengthAnswer < 9 || lengthAnswer > 128) {

  alert ('not a valid length');

  prompt('Please enter a numeric value between 8 and 128 to determine the length of your password');

};

console.log(lengthAnswer);

var numbersAnswer = confirm("Do you want numbers in your password? (OK(yes)/Cancel(no))");

console.log(numbersAnswer);

var upperCaseAnswer = confirm("Do you want upper case letters in your password? (OK(yes)/Cancel(no))");

console.log(upperCaseAnswer);

var lowerCaseAnswer = confirm("Do you want lower case letters in your password? (OK(yes)/Cancel(no))");

console.log(lowerCaseAnswer);

var symbolsAnswer = confirm("Do you want symbols in your password? (OK(yes)/Cancel(no))");

console.log(symbolsAnswer);

}