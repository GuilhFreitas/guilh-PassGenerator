// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let passLength = "";
let allowedCharacters = [];
let randomPass = "";

// Function to prompt user for password options
function getPasswordOptions() {
  passLength = prompt("Please enter the length of your password from 10 to 64 characters:");
  while (passLength < 10 || passLength > 64 || isNaN(passLength)){
    passLength = prompt("Your password cannot be that length. Please enter the length of your password from 10 to 64 characters:");
  }
  if(confirm("Would you like your password to contain lowercase characters?")){
    allowedCharacters = allowedCharacters.concat(lowerCasedCharacters);
  }
  if(confirm("Would you like your password to contain uppercase characters?")){
    allowedCharacters = allowedCharacters.concat(upperCasedCharacters);
  }
  if(confirm("Would you like your password to contain numbers?")){
    allowedCharacters = allowedCharacters.concat(numericCharacters);
  }
  if(confirm("Would you like your password to contain special characters?")){
    allowedCharacters = allowedCharacters.concat(specialCharacters);
  }
}

// Function for getting a random element from an array
function getRandom() {
  for (i = 0; i < passLength; i++){
    let randomIndex = Math.floor(Math.random()*allowedCharacters.length);
    randomPass += allowedCharacters[randomIndex];
  }
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  getRandom();
  return randomPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);