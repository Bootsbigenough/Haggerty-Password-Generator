// Assignment code here
function generatePassword() {
  var lower = "abcdefghijklmnopqrstuvwxyz"
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbys = "0123456789"
  var spesh = "!@#$%^&*()"
  var characterBase = ""
  var generatedPassword = ""
  var passwordLength = prompt ("Choose how long your password will be")
  var lowerCase = confirm ("Do you want Lowercase letters?")
  var upperCase = confirm ("Do you want Uppercase Letters?")
  var Numbers = confirm ("Do you want Numbers?")
  var specialCharacters = confirm ("Do you want Special Characters?")
  if(lowerCase == true) {
    characterBase = characterBase + lower
  }
  if(upperCase == true) {
    characterBase = characterBase + upper
  }
    if(Numbers == true) {
    characterBase = characterBase + numbys
  } 
   if(specialCharacters == true) {
    characterBase = characterBase + spesh
  }
  for (let i = 0; i < passwordLength; i++) {
    generatedPassword += characterBase.charAt(Math.floor(Math.random() * characterBase.length))
    
  }
  return generatedPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
