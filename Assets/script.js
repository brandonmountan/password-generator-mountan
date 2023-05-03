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
  var num = prompt('Please enter a numeric value between 8 and 128');
  if (num < 9 || num > 128) {
    alert ('not a valid length');
  }
  var numbers = confirm("Do you want numbers in your password? (yes/no)");

}




  // password.length > 8 || password.length < 128