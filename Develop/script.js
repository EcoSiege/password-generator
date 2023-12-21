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








// prompt(), alert(), confirm()
function generatePassword() {
  var length = prompt("How long do you want your password to be?");
  var lowercase = confirm("Do you want to include lowercase letters?");
  var uppercase = confirm("Do you want to include uppercase letters?");

  var randomNumber = Math.floor(Math.random() * length - 1);
  console.log(randomNumber);
};
generatePassword()