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

  var characterPool = '';

  var lengthAnswer = prompt('Please enter a numeric value between 8 and 128 to determine the length of your password');

  if (lengthAnswer < 9 || lengthAnswer > 128) {

    alert ('not a valid length');
// Have to click on generate password button again.
    return

  };
// Adding numbers, upper case, lower case, and symbols.
  var numbersAnswer = confirm("Do you want numbers in your password? (OK(yes)/Cancel(no))");

  if (numbersAnswer === true) {

   characterPool = characterPool + "0123456789";

  }

  var upperCaseAnswer = confirm("Do you want upper case letters in your password? (OK(yes)/Cancel(no))");

  if (upperCaseAnswer === true) {

    characterPool = characterPool + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  }

  var lowerCaseAnswer = confirm("Do you want lower case letters in your password? (OK(yes)/Cancel(no))");

  if (lowerCaseAnswer === true) {

   characterPool = characterPool + "abcdefghijklmnopqrstuvwxyz";

  }

  var symbolsAnswer = confirm("Do you want symbols in your password? (OK(yes)/Cancel(no))");

  if (symbolsAnswer === true) {

  characterPool = characterPool + "!@#$%^&*()";

  }
// Creates an array that splits the character pool into individual indexes
  const myArray = characterPool.split("");
// Creates another array that the random values will be pushed to.
  var finalPassword = []
// For loop that takes the length the user inputs multiplied by a random number which is used to assign the characters.
  for (var i = 0; i < lengthAnswer; i++) {

  var randomIndex = Math.floor(Math.random() * myArray.length);
// Creates a variable for the values to be assigned to.
  var indexValue = myArray[randomIndex];
// Pushes the values to the final password
  finalPassword.push(indexValue);

  }
// Joins the password with no spaces
  return finalPassword.join("");

}