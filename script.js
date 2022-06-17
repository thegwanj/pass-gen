// numbers
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; //10 items

// special characters
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "]", "{", "}", "|", "\\", ";", ":", ",", "<", ".", ">", "/", "?"]; //28 items

// lower case letters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //26 items

// uppercase case letters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //26 items

// Generate Password
function generatePassword() {

  // Prompt the user for their password length and store it in a variable
  var passLength = prompt("Please enter a password length", "8-128 characters");
  console.log(passLength);
  console.log(typeof(passLength));

  // Validate the user's provided passwordLength to be a number within the range of 8 to 128
  if (passLength < 8 || passLength > 128 || passLength == null || passLength%1 != 0) { //also makes sure we did not have an empty answer or a decimal
    alert("Invalid length: Need to pick a length between 8 and 128 characters");
    return;
  }

  // Prompt the user for if they want special characters and store it in a variable
  var includeSpecial = confirm("Would you like to include SPECIAL characters in your password?");
  console.log(includeSpecial);
  
  // Prompt the user for if they want numbers characters and store it in a variable
  var includeNumber = confirm("Would you like to include NUMBER characters in your password?");
  console.log(includeNumber);

  // Prompt the user for if they want lowercase characters and store it in a variable
  var includeLower = confirm("Would you like to include LOWERCASE characters in your password?");
  console.log(includeLower);

  // Prompt the user for if they want uppercase characters and store it in a variable
  var includeUpper = confirm("Would you like to include UPPERCASE characters in your password?");
  console.log(includeUpper);

  // Validate the user's charater choices
  if(includeSpecial == false && includeNumber == false && includeLower == false && includeUpper == false){
    alert("Invalid password configuration: Need to choose a character option");
    return;
  }

  // Celebrate! We have all the data we need :D

  // DECLARE a new empty array to store the `characters` we want to use.
  var charPool = [];

  // cool link for future reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

  // REPEAT check and combine for numbers, lowercase and uppercase
  if(includeSpecial == true){
    charPool = charPool.concat(special);
    console.log(charPool);
  }

  if(includeNumber == true){
    charPool = charPool.concat(numbers);
    console.log(charPool);
  }

  if(includeLower == true){
    charPool = charPool.concat(lowercase);
    console.log(charPool);
  }

  if(includeUpper == true){
    charPool = charPool.concat(uppercase);
    console.log(charPool);
  }

  // DECLARE a new empty string to store the password we want to build.
  var password = "";

  // FOR the length of the password the user wants
  for(var i = 0; i < passLength; i++){
    password = password.concat(charPool[Math.floor(Math.random()*charPool.length)]);
    console.log("password: " + password);
    console.log("i: " + i);
  }

  return password;

    // Randomly select a character from the list of characters

    // Add the selected character to the password being built;

  // RETURN the built password;

} 

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
