// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Arrays for each character type
const big = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const small = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '/', '?', '.', '>', '<', ',', '{', '}', '[', ']', '`', '~', ';', ':', '"', "'", '|'];

function generatePassword() {
  selection = [];
  var length = prompt("How long do you want your password to be?\nMininum length is 8 characters.\nMaximum length is 128 characters.");
  // Ends function if there is no imput
  if (!length) {
    return;
  // Ends function if the input is too long or too short
  } else if (length < 8) {
    alert("Password length must be inbetween 8 and 128.");
    return;
  } else if (length > 128) {
    alert("Password length must be inbetween 8 and 128.");
    return;
  };
  // Prompts for the user to pick character types
  var lowercase = confirm("Do you want to include lowercase letters?");
  var uppercase = confirm("Do you want to include uppercase letters?");
  var number = confirm("Do you want to include numbers?");
  var special = confirm('Do you want to include special characters?');
  var password


  // Concats selected character types into one array
  if (lowercase) {selection = selection.concat(small)};
  if (uppercase) {selection = selection.concat(big)};
  if (number) {selection = selection.concat(numbers)};
  if (special) {selection = selection.concat(specials)};
  if (selection.length == 0) {
    alert("Select at least one character type.")
    return
  }
  // Picks random array elements untill users selected lenght is reached
  for (var i = 0; i < length; i++){
    var randomNumber = Math.floor(Math.random() * selection.length );
    if (!password){
      password = selection[randomNumber];
    } else {
      password = password + selection[randomNumber];
    };
  };
  // displays password
  var passwordText = document.querySelector("#password")
  passwordText.value = password;
};
